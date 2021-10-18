<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Srmklive\PayPal\Services\ExpressCheckout;

class BookingController extends Controller
{
    //
    public function orderHistory()
    {
        $history = User::leftjoin('booking', 'booking.userId', 'users.id')
            ->where('id', Auth::user()->id)
            ->paginate(5);
        return ['status' => '200', 'history' => $history];
    }

    public function payment()
    {
        $data = [];
        $data['items'] = [
            [
                'name' => 'ItSolutionStuff.com',
                'price' => 100,
                'desc'  => 'Description for ItSolutionStuff.com',
                'qty' => 1
            ]
        ];

        $data['invoice_id'] = 1;
        $data['invoice_description'] = "Order #{$data['invoice_id']} Invoice";
        $data['return_url'] = 'success';
        $data['cancel_url'] = 'cancel';
        $data['return_url'] = "success";
        $data['cancel_url'] = "cancel";
        $data['total'] = 100;

        $provider = new ExpressCheckout;
        // print_r($provider);
        // die();
        // $response = $provider->setExpressCheckout($data);

        $response = $provider->setExpressCheckout($data, true);

        return $response;
    }
}
