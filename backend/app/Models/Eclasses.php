<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eclasses extends Model
{
    use HasFactory;
    protected $table = "eclasses";
    protected $fillable = [
        'filePath', 'eclassImage', 'eclassName', 'title', 'learn', 'description', 'Price', 'status'
    ];
}
