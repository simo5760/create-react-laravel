<?php 
use App\Http\Controllers\DocumentController;
use Illuminate\Support\Facades\Route;

Route::post('/upload', [DocumentController::class, 'upload']);
Route::get('/results', [DocumentController::class, 'results']);