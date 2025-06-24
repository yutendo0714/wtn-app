<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Practice extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'location_id',
        'category_id',
        'start_at',
        'end_at',
    ];

    public function players()
    {
        return $this->hasMany(Player::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function chatRoom()
    {
        return $this->hasOne(ChatRoom::class);
    }
}
