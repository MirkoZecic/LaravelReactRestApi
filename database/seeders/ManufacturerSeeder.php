<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ManufacturerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('manufacturers')->insert([[
            'name' => 'Samsung'
        ], [
            'name' => 'Nokia'
        ], [
            'name' => 'iPhone'
        ], [
            'name' => 'Huawei'
        ], [
            'name' => 'Xiaomi'
        ]]);
    }
}
