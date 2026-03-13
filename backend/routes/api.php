<?php
use Illuminate\Support\Facades\Route;

Route::get('/users', function () {
    return response()->json([
        "name" => "John",
        "role" => "Admin"
    ]);
});