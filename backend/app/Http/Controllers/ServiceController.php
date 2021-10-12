<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\ServiceLookUp;
use App\Models\ServiceProfile;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ServiceController extends Controller
{
    public function getServices()
    {
        $service =   Service::get();
        return response()->json([
            'status' => '200',
            'services' => $service
        ]);
    }

    public function providerProfileAbout(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'profileAbout' => ['required', 'string'],
            ]
        );
        if ($validator->fails()) {
            return response()->json(['status' => '422', 'msg' => $validator->getMessageBag()]);
        } else {
            try {
                $service_profile = ServiceProfile::where('userId', 4)->update(['description' => $request->profileAbout]);
                return response()->json(['status' => '200', 'msg' => 'About Profile Successfully', 'data' => Auth::user()->id]);
            } catch (Exception $e) {
                return response()->json(['status' => '400', 'msg' => $e->getMessage()]);
            }
        }
    }

    public function providerProfileVideo(Request $request)
    {
        $name = "";
        return response()->json(['status' => '200', 'msg' => 'Profile Video Uploaded Successfully', 'data' => $request->all()]);
        try {
            if ($request->hasFile('file')) {
                $file = $request->file('file');
                $name = time() . "_" . $file->getClientOriginalName();
                $file->move(public_path() . '/uploads/', $name);
                $name = public_path() . '/uploads/' . $name;
            }
            $service_profile = ServiceProfile::where('id', Auth::user()->id)->update(['videoPath' => $name]);
            return response()->json(['status' => '200', 'msg' => 'Profile Video Uploaded Successfully', 'data' => $service_profile]);
        } catch (Exception $e) {
            return response()->json(['status' => '400', 'msg' => $e->getMessage()]);
        }
    }

    public function providerProfileServices(Request $request)
    {
        $services = array();
        // $validator = Validator::make(
        //     $request->all(),
        //     [
        //         'value' => ['required'],
        //     ]
        // );
        // if ($validator->fails()) {
        //     return response()->json(['status' => '422', 'msg' => $validator->getMessageBag()]);
        // } else {
        try {
            foreach ($request->selectService as $service) {
                // $service_profile = ServiceProfile::where('id', Auth::user()->id)->update($request->all());
                // echo "<pre>";

                if ($service['priceaudio'] != "") {
                    $services[] = array('userId' => Auth::user()->id, 'serviceId' => $service['value'], "chatType" => 'audio', 'price' => $service['priceaudio'], 'status' => '1');
                }
                if ($service['pricevideo'] != "") {
                    $services[] = array('userId' => Auth::user()->id, 'serviceId' => $service['value'], "chatType" => 'video', 'price' => $service['pricevideo'], 'status' => '1');
                }
                if ($service['pricechat'] != "") {
                    $services[] = array('userId' => Auth::user()->id, 'serviceId' => $service['value'], "chatType" => 'text', 'price' => $service['pricechat'], 'status' => '1');
                }
            }
            // var_dump($services);
            // die();
            $lookup = ServiceLookUp::insert($services);
            return response()->json(['status' => '200', 'msg' => 'Service  Created Successfully', 'data' => $lookup]);
        } catch (Exception $e) {
            return response()->json(['status' => '400', 'msg' => $e->getMessage()]);
        }
        // }
    }

    public function providerProfileDetails(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'firstname' => ['required', 'string', 'max:255'],
                'lastname' => ['required', 'string', 'max:255'],
                'gender' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'max:255'],
                'country' => ['required', 'int'],
                'contactno' => ['required', 'string', 'max:255'],
                'city' => ['required', 'int'],
                'state' => ['required', 'int'],
                'yearexperience' => ['required', 'string', 'max:255'],
                'yearjoined' => ['required'],
                'zipcode' => ['required'],
            ]
        );
        if ($validator->fails()) {
            return response()->json(['status' => '422', 'msg' => $validator->getMessageBag()]);
        } else {
            try {
                $user = User::where('id', Auth::user()->id)->update([
                    'FirstName'         =>  $request->firstname,
                    'LastName'         =>  $request->firstname,
                    'contactNo'         =>  $request->firstname,
                ]);
                $profile = ServiceProfile::where('userId', Auth::user()->id)->update([
                    'countryId'         =>      $request->country,
                    'stateId'         =>      $request->state,
                    'cityId'         =>      $request->city,
                    'zipCode'         =>      $request->zipcode,
                    'joinedDate'         =>      $request->yearjoined,
                    'yearExperience'         =>      $request->yearexperience,
                ]);
                return response()->json(['status' => '200', 'msg' => 'Profile Updated Successfully', 'user' => $user, 'profile' => $profile]);
            } catch (Exception $e) {
                return response()->json(['status' => '400', 'msg' => $e->getMessage()]);
            }
        }
    }

    public function providerProfileData()
    {
        $data = User::leftjoin('serviceproviderprofile as profile', 'profile.userId', 'users.id')
            ->select('users.*', 'profile.*')
            ->where('users.id', Auth::user()->id)
            ->first()->makeHidden(['profile.id', 'profile.userId']);
        $services = ServiceLookUp::where('userId', Auth::user()->id)->get();
        foreach ($services as $service) {
            if ($service->serviceId == '1') {
                $services2[0]['value'] = "1";
                $services2[0]['label'] = Service::where('type', '1')->select('name')->first()->name;
                if ($service->chatType == "audio") {
                    $services2[0]['priceaudio'] = $service->price;
                }
                if ($service->chatType == "text") {
                    $services2[0]['pricechat'] = $service->price;
                }
                if ($service->chatType == "video") {
                    $services2[0]['pricevideo'] = $service->price;
                }
            } else {
                $services2[1]['value'] = "2";
                $services2[1]['label'] = Service::where('type', '2')->select('name')->first()->name;
                if ($service->chatType == "audio") {
                    $services2[1]['priceaudio'] = $service->price;
                }
                if ($service->chatType == "text") {
                    $services2[1]['pricechat'] = $service->price;
                }
                if ($service->chatType == "video") {
                    $services2[1]['pricevideo'] = $service->price;
                }
            }
        }
        return response()->json(['status' => '200', 'msg' => 'Profile data', 'profile' => $data, 'services' => $services, 'services2' => $services2]);
    }
}
