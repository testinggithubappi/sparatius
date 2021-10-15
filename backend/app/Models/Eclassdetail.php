<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eclassdetail extends Model
{
    use HasFactory;
    protected $table = "eclassdetail";
    protected $fillable = [
        'learn', 'description'
    ];
}
