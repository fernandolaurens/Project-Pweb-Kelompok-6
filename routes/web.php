<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Contact;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\LoginController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [ContactController::class, 'index'])->name('contact')->middleware('auth');
Route::get('/contact', [ContactController::class, 'index'])->name('contact')->middleware('auth');

Route::get('/newContact', [ContactController::class, 'newContact'])->name('newContact')->middleware('auth');
Route::post('/addContact', [ContactController::class, 'addContact'])->name('addContact')->middleware('auth');


Route::get('/viewContact/{id}', [ContactController::class, 'viewContact'])->name('viewContact')->middleware('auth');
Route::post('/editContact/{id}', [ContactController::class, 'editContact'])->name('editContact')->middleware('auth');

Route::get('/deleteContact/{id}', [ContactController::class, 'deleteContact'])->name('deleteContact')->middleware('auth');

Route::get('/login', [LoginController::class, 'login'])->name('login');
Route::post('/loginproc', [LoginController::class, 'loginproc'])->name('loginproc');

Route::get('/register', [LoginController::class, 'register'])->name('register');
Route::post('/registeruser', [LoginController::class, 'registeruser'])->name('registeruser');

Route::get('/logout', [LoginController::class, 'logout'])->name('logout')->middleware('auth');