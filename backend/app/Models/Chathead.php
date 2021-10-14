<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chathead extends Model
{
    use HasFactory;
    protected $fillable = ['from_id', 'to_id', 'session_id', 'token'];
}
