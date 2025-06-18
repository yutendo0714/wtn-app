<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'name' => 'test',
                'email' => 'test@test.com',
                'password' => '$2y$12$auZyAIeWQcvCQV5hH7/vD.J21kY57yj9tb3HV/PbCsA9VJgiZ6eTu',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
