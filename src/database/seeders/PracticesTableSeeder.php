<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PracticesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('practices')->insert([
            [
                'title' => '個人連募集',
                'location_id' => 1,
                'category_id' => 1,
                'start_at' => '2025-06-15 9:00:00',
                'end_at' => '2025-06-15 11:00:00',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
