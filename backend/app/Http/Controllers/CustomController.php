<?php

namespace App\Http\Controllers;

use App\Mail\InviteEmail;
use App\Models\Country;
use App\Models\State;
use App\Models\City;
use App\Models\ContactUs;
use App\Models\Eclassdetail;
use App\Models\Eclasses;
use App\Models\Favorite;
use App\Models\Invitefriend;
use App\Models\Rating;
use App\Models\Service;
use App\Models\ServiceLookUp;
use App\Models\ServiceProfile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

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
            ->leftjoin('rating', 'rating.providerId', 'lookup.userId')
            ->select(DB::raw('users.*, lookup.serviceId, profile.description, Year(profile.joinedDate) as joinedYear, GROUP_CONCAT(lookup.chatType) as type, GROUP_CONCAT(lookup.price) as prices, IF(AVG(ratingScore) > 0,AVG(ratingScore),0) as rating'))
            ->where(['users.roleType' => 'provider', 'lookup.serviceId' => $type->id])->groupBy('lookup.serviceId')
            // ->paginate(2);
            ->toSql();
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

    public function inviteFriends(Request $request)
    {
        $check = Invitefriend::where(['userId' => Auth::user()->id, 'email' => $request->email])->first();
        if (empty($check)) {
            $invitation = Invitefriend::create([
                'userId' => Auth::user()->id,
                'email' => $request->email,
            ]);
            Mail::to($request->email)->send(new InviteEmail(env('BASE_URL'), Auth::user()->firstName . " " . Auth::user()->lastName));
            return response()->json(['status' => '200', 'msg' => 'invitation send successfully', 'data' => $invitation]);
        } else {
            return response()->json(['status' => '400', 'msg' => "invitation already send to this email", 'data' => ""]);
        }
    }

    public function addFavorite(request $request)
    {
        $check = Favorite::where(['userId' => Auth::user()->id, 'providerId' => $request->id])->first();
        if (empty($check)) {
            $fav = Favorite::create([
                'userId'        => Auth::user()->id,
                'providerId'    =>  $request->id
            ]);
            return response()->json(['status' => '200', "msg" => "Favorite Added", 'data' => $fav]);
        } else {
            return response()->json(['status' => '400', "msg" => "Already Favorite", 'data' => ""]);
        }
    }

    public function userProfile()
    {
        $user = User::where('id', Auth::user()->id)->first();
        return ['status' => '200', 'data' => $user];
    }

    public function editProfile(Request $request)
    {
        $updated = User::where('id', Auth::user()->id)->update($request->all());
        return ['status' => '200', 'data' => $updated];
    }
}
