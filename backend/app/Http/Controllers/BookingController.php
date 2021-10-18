<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\URL;
use PayPal\Api\Amount;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\Payer;
use PayPal\Api\Payment;
use PayPal\Api\PaymentExecution;
use PayPal\Api\RedirectUrls;
use PayPal\Api\Transaction;
use PayPal\Auth\OAuthTokenCredential;
use PayPal\Rest\ApiContext;
use Srmklive\PayPal\Facades\PayPal;
use PayPal\Exception\PayPalConnectionException;

class BookingController extends Controller
{
    //
    public function __construct()
    {
        /** PayPal api context **/
        $paypal_conf = Config::get('paypal');
        $this->_api_context = new ApiContext(
            new OAuthTokenCredential(
                $paypal_conf['sandbox']['client_id'],
                $paypal_conf['sandbox']['client_secret']
            )
        );
        $this->_api_context->setConfig($paypal_conf['sandbox']);
    }

    public function orderHistory()
    {
        $history = User::leftjoin('booking', 'booking.userId', 'users.id')
            ->where('id', Auth::user()->id)
            ->paginate(5);
        return ['status' => '200', 'history' => $history];
    }

    public function payment(Request $request)
    {
        $payer = new Payer();
        $payer->setPaymentMethod('paypal');

        $item = new Item();
        $item->setName($request->serviceName)
            /** item name **/
            ->setCurrency('USD')
            // ->setQuantity(1)
            ->setPrice($request->amount);

        $item_list = new ItemList();
        $item_list->setItems(array($item));

        $amount = new Amount();
        $amount->setCurrency('USD')
            ->setTotal($request->amount);
        $transaction = new Transaction();
        $transaction->setAmount($amount)
            ->setItemList($item_list)
            ->setDescription($request->description);

        // $baseUrl = "www.google.com";

        $redirect_urls = new RedirectUrls();
        $redirect_urls->setReturnUrl(URL::url('approved_status' . "/" . $request->serviceId . "/" . $request->bookingId))
            /** Specify return URL **/
            ->setCancelUrl(URL::route('cancel_status'));

        $payment = new Payment();
        $payment->setIntent('Sale')
            ->setPayer($payer)
            ->setRedirectUrls($redirect_urls)
            ->setTransactions(array($transaction));
        /** dd($payment->create($this->_api_context));exit; **/
        // $payment->create($this->_api_context);
        // echo "<pre>";
        // print_r($this->_api_context);
        // die();
        try {
            $payment->create($this->_api_context);
            // echo "<pre>";
            // Session::put('execute', ($payment->toArray()['links'][1])['href']);
            // print_r(($payment->toArray()['links'][2])['href']);
            // die();
            // echo "<pre>";
            // print_r(Session::get('paymentId'));
            // die();
        } catch (PayPalConnectionException $ex) {
            echo $ex->getCode();
            echo $ex->getData(); // Prints the detailed error message
            die($ex);
        }
        return redirect(($payment->toArray()['links'][1])['href']);
    }

    public function approvedStatus($serviceId, $bookingType)
    {
        $payment = Payment::get($_GET['paymentId'], $this->_api_context);
        $execution = new PaymentExecution();
        $execution->setPayerId($_GET['PayerID']);
        $result = $payment->execute($execution, $this->_api_context);
        $data = $result->toArray();
        $booking = Booking::create([
            'userId'        =>      Auth::user()->id,
            'serviceId'     =>      $serviceId, //Dynamic
            'totalPrice'    =>      $data['transactions'][0]['amount']['total'],
            'transactionId' =>      $data['id'],
            'captureId'     =>      $data['transactions'][0]['related_resources'][0]['sale']['id'],
            'bookingType'   =>      $bookingType,
        ]);
        // echo "<pre>";
        // print_r($result->toArray());
        // die();
        return ['status' => '200', 'booking' => $booking];
    }
}
