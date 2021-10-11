<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceProfile extends Model
{
    use HasFactory;
    protected $table = "serviceproviderprofile";
    protected $fillable = [
        'userId', 'description', 'videoPath', 'countryId', 'cityId', 'stateId', 'zipCode', 'joinedDate', 'yearExperience'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function country()
    {
        return $this->belongsTo(Country::class);
    }
    public function State()
    {
        return $this->belongsTo(State::class);
    }
    public function City()
    {
        return $this->City(State::class);
    }
}
