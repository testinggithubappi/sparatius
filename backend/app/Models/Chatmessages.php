<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chatmessages extends Model
{
    use HasFactory;
    protected $fillable = ['chathead_id', 'from_id', 'to_id', 'message'];
}
