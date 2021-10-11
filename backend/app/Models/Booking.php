<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $table = "booking";
    protected $fillable = [
        'userId', 'serviceId', 'totalDuration', 'sessionDuration', 'totalPrice', 'transactionId', 'captureId', 'eClassId', 'BookingType'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function services()
    {
        return $this->belongsTo(ServiceLookUp::class);
    }
}
