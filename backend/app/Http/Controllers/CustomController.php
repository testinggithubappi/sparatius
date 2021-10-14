<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Models\State;
use App\Models\City;
use App\Models\ContactUs;
use App\Models\Eclassdetail;
use App\Models\Eclasses;
use App\Models\Rating;
use App\Models\Service;
use App\Models\ServiceLookUp;
use App\Models\ServiceProfile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CustomController extends Controller
{
    public function getCountry()
    {
        return Country::get();
    }
    public function getState(Request $request)
    {
        return State::where('country_id', $request->country_id)->get();
    }
    public function getCity(Request $request)
    {
        return City::where('state_id', $request->state_id)->get();
    }
    public function getTarotProviders(Request $request)
    {
        $type = Service::where('slug', $request->slug)->first();

        $providers = User::leftjoin("serviceproviderprofile as profile", 'profile.userId', 'users.id')
            ->leftjoin('serviceslookup as lookup', 'lookup.userId', 'users.id')
            ->select(DB::raw('users.*, lookup.serviceId, profile.description, Year(profile.joinedDate) as joinedYear, GROUP_CONCAT(lookup.chatType) as type, GROUP_CONCAT(lookup.price) as prices'))
            ->where(['users.roleType' => 'provider', 'lookup.serviceId' => $type->id])->groupBy('lookup.serviceId')->paginate(2);
        // $type = Service::where('slug', $request->slug)->first();
        // $i = 0;
        // foreach ($providers as $provider) {
        //     $rating = array();
        //     $provider->profile = ServiceProfile::where('userId', $provider->id)->get();
        //     $provider->lookup = ServiceLookUp::leftjoin('rating', 'rating.serviceId', 'serviceslookup.id')->where(['userId' => $provider->id, 'serviceId' => $type->id])->get();
        //     if (empty(($provider->lookup)->toArray())) {
        //         unset($providers[$i]);
        //     } else {
        //         foreach ($provider->lookup as $lookup) {
        //             $rating[] = Rating::where('serviceId', $lookup->id)->avg('ratingScore');
        //         }
        //         $provider->rating = $rating;
        //     }
        //     $i++;
        // }
        return response()->json(['data' => $providers]);
    }

    public function contactUs(Request $request)
    {
        $contact = ContactUs::create($request->all());
        return response()->json(['status' => '200', 'data' => $contact]);
    }

    public function eClasses()
    {
        $eclasses = Eclasses::paginate(3);
        return ['status' => '200', 'data' => $eclasses];
    }

    public function eClassDetail($id)
    {
        $detail = Eclasses::where('id', $id)->first();
        return ['status' => '200', 'data' => $detail];
    }
}
