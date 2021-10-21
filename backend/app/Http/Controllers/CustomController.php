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
use Illuminate\Support\Facades\Hash;
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
        $flag = false;
        $type = Service::where('slug', $request->slug)->first();
        $where = "users.roleType = 'provider' AND lookup.serviceId = " . $type->id;
        if ($request->ReadingAll) {
        }
        if ($request->ReadingAudio) {
            $where .= " AND (lookup.chatType = 'audio'";
            $flag = true;
        }
        if ($request->ReadingChat) {
            $where .= ($flag) ? " OR lookup.chatType = 'text'" : " AND (lookup.chatType = 'text'";
            $flag = true;
        }
        if ($request->ReadingVideo) {
            $where .= ($flag) ? " OR lookup.chatType = 'video'" : " AND (lookup.chatType = 'video'";
            $flag = true;
        }
        if ($request->keyword) {
            $where .= ($flag) ? " OR users.firstName LIKE '%" . $request->keyword . "%')" : " AND users.firstName LIKE '%" . $request->keyword . "%'";
        }
        if ($request->RangeStart) {
            $where .= " AND (lookup.price BETWEEN '" . $request->RangeStart . "' AND '" . $request->RangeEnd . "')";
        }
        if ($flag) {
            $where .= ")";
        }
        // if ($request->RangeEnd) {
        //     $where .= ($priceflag) ? " OR lookup.price <= '" . $request->RangeEnd . "'" : " AND lookup.price <= '" . $request->RangeEnd . "'";
        //     $priceflag = true;
        // }
        // echo $where . ")";
        // die();
        $providers = User::leftjoin("serviceproviderprofile as profile", 'profile.userId', 'users.id')
            ->leftjoin('serviceslookup as lookup', 'lookup.userId', 'users.id')
            ->leftjoin('rating', 'rating.providerId', 'lookup.userId')
            ->select(DB::raw('users.*, lookup.serviceId, profile.description, Year(profile.joinedDate) as joinedYear, GROUP_CONCAT(DISTINCT(lookup.chatType)) as type, GROUP_CONCAT(lookup.price) as prices, IF(AVG(ratingScore) > 0,AVG(ratingScore),0) as rating'))
            ->where(DB::raw($where), '>', DB::raw('0'))->groupBy('lookup.userId')->paginate(2);
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
        $detail['ratingRview'] =  Rating::leftjoin('users as customer', 'rating.userid', 'customer.id')
            ->selecT(['customer.firstName as customername', 'rating.description', 'rating.description', DB::raw('DATE_FORMAT(rating.created_at, "%d-%b-%Y") as ratingdate')])
            ->where('rating.eclassId', $id)
            ->get();
        $detail['rating'] = Rating::select(DB::raw('IF(AVG(ratingScore) > 0,AVG(ratingScore),0) as rating'))->where('rating.eclassId', $id)
            ->groupBy('rating.eclassId')->first();

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

    public function passwordUpdate(Request $request)
    {
        $check = User::where('id', Auth::user()->id)->first();
        if (!empty($check)) {
            if (Hash::check($request->currentPassword, $check->password)) {
                User::where('id', Auth::user()->id)->update(['password' => $request->password]);
                return $this->userProfile();
            } else {
                return ['status' => '400', 'msg' => 'Previous password incorrect'];
            }
        }
    }

    public function saveRating(Request $request)
    {
        $data = array();
        $data['userId'] = Auth::user()->id;
        $data['providerId'] = $request->provider;
        $data['type'] = $request->type;
        $data['ratingScore'] = $request->rating;
        $data['description'] = $request->description;
        if ($request->servicetype != "") {
            $data['serviceId'] = ServiceLookUp::where(['userId' => $request->provider, 'chatType' => $request->servicetype])->first()->id;
        }
        if ($request->eclass != "") {
            $data['eclassId'] = $request->eclass;
        }
        $rating = Rating::create($data);
        return ['status' => '200', 'data' => $rating];
    }

    public function userFavorite()
    {
        // $fav = Favorite::leftjoin('users', 'users.id', 'favorites.providerId')->where('id', Auth::user()->id)->first();

        $fav = Favorite::leftjoin('users', 'users.id', 'favorites.providerId')
            ->leftjoin("serviceproviderprofile as profile", 'profile.userId', 'users.id')
            ->leftjoin('serviceslookup as lookup', 'lookup.userId', 'users.id')
            ->leftjoin('rating', 'rating.providerId', 'lookup.userId')
            ->select(DB::raw('users.*, lookup.serviceId, profile.description, Year(profile.joinedDate) as joinedYear, GROUP_CONCAT(lookup.chatType) as type, GROUP_CONCAT(lookup.price) as prices, IF(AVG(ratingScore) > 0,AVG(ratingScore),0) as rating'))
            ->where('favorites.userId', Auth::user()->id)->paginate(2);
        return ['status' => '200', 'data' => $fav];
    }
}
