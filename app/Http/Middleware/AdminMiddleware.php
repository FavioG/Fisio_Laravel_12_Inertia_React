<?php

namespace App\Http\Middleware;

use Closure;
use Inertia\Middleware;
use Illuminate\Http\Request;
use Illuminate\Foundation\Inspiring;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    public function handle($request, Closure $next): Response
    {
        //Verificar si el usuario está autenticado y tiene un registro en la tabla admin
        if (Auth::check() && Auth::user()->admins()->exists()) {
            return $next($request);
        }
        return redirect('/login');
    }
}
