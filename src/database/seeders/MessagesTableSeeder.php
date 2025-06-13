<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MessagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('messages')->insert([
            [
                'user_id' => 1,
                'chat_room_id' => 1,
                'content' => '今日どうする？',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'user_id' => 1,
                'chat_room_id' => 1,
                'content' => '10時集合にしよう。',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
