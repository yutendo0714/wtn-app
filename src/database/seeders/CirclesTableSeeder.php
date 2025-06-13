<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CirclesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('circles')->insert([
            [
                'name' => 'ほげほげサークル',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
