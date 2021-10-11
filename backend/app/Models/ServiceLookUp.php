<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceLookUp extends Model
{
    use HasFactory;
    protected $table = "serviceslookup";
    protected $fillable = [
        'userId', 'serviceId', 'chatType', 'price', 'status'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function services()
    {
        return $this->belongsTo(services::class);
    }
}
