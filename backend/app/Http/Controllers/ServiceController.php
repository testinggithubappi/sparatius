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
        // $validator = Validator::make(
        //     $request->all(),
        //     [
        //         'file' => ['required|mimes:mp4,mpeg|max:10240'],
        //     ]
        // );
        // if ($validator->fails()) {
        //     return response()->json(['status' => '422', 'msg' => $validator->getMessageBag()]);
        // } else {
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
        // }
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
                if ($service['priceaudio'] != "") {
                    $services = array('userId' => Auth::user()->id, 'serviceId' => $service['value'], "chatType" => 'audio', 'price' => $service['priceaudio'], 'status' => '1');
                }
                if ($service['pricevideo'] != "") {
                    $services = array('userId' => Auth::user()->id, 'serviceId' => $service['value'], "chatType" => 'video', 'price' => $service['pricevideo'], 'status' => '1');
                }
                if ($service['pricechat'] != "") {
                    $services = array('userId' => Auth::user()->id, 'serviceId' => $service['value'], "chatType" => 'text', 'price' => $service['pricechat'], 'status' => '1');
                }
            }
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
}
