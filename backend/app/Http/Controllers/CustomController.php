<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Models\State;
use App\Models\City;
use App\Models\User;
use Illuminate\Http\Request;

class CustomController extends Controller
{
    public function getCountry(Request $request)
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
        // $providers = User::where('roleType' =>  'provider');
    }
}
