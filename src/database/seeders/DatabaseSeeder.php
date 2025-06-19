<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\ChatRoom;
use App\Models\Circle;
use App\Models\Location;
use App\Models\Message;
use App\Models\Player;
use App\Models\Practice;
use App\Models\User;
use App\Models\UserProfile;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        Circle::factory(1)->create();
        Location::factory(10)->create();
        Category::factory(10)->create();
        UserProfile::factory(10)->create();
        Practice::factory(5)->create();
        Player::factory(10)->create();
        ChatRoom::factory(5)->create();
        Message::factory(10)->create();
    }
}
