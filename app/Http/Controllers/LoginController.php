<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login() {
        return Inertia::render('Login');

    }

    public function loginproc(Request $request) {
        if(Auth::attempt($request-> only('email','password'))){
            return to_route('contact');
        }
        return to_route('login');
    }

    public function register() {
        return Inertia::render('Register');

    }

    public function registeruser(Request $request) {
       User::create([
            'name' => $request ->name,
            'email' => $request ->email,
            'password' => bcrypt($request->password),
            'remember_token' => Str::random(60),
       ]);

       return to_route('login');

    }

    public function logout() {
        Auth::logout();
        return to_route('login');

    }
}
