<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChatRoom extends Model
{
    use HasFactory;

    protected $fillable = [
        'practice_id',
    ];

    public function practice()
    {
        return $this->belongsTo(Practice::class);
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }
}
