<?php

use Illuminate\Support\Facades\Route;

Route::get('/users', function () {
    return response()->json([
        "name" => "Mohamed",
        "role" => "Developer"
    ]);
});