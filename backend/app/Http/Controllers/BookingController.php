<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookingController extends Controller
{
    //
    public function orderHistory()
    {
        $history = User::join('booking', 'booking.userId', 'users.id')
            ->where('id', Auth::user()->id)
            ->get();
        return ['status' => '200', 'history' => $history];
    }
}
