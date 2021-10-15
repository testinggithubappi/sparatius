<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invitefriend extends Model
{
    use HasFactory;
    protected $fillable = ['userId', 'email'];
}
