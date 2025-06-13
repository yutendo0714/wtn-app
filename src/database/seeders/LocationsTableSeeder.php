<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LocationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('locations')->insert([
            [
                'name' => 'ほげほげ公園',
                'latitude' => 100,
                'longtitude' => 100,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
