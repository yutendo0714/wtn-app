<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Circle extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function userProfile()
    {
        return $this->hasOne(UserProfile::class);
    }
}
