<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Patient\PatientController;

//Grupo de rutas protegias para administrador
Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    // Route::middleware(['auth', 'admin'])->group(function () {
    //Dashboard
    Route::get('/dashboard', function () {
        return Inertia::render('dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');

    //Patients CRUD
    // Route::resource('patients', PatientController::class)
    //     ->except(['edit', 'show'])
    //     ->names('patients')
    //     ->parameter('patients', 'patient');

    Route::get('/patient-create', [PatientController::class, 'create'])
        ->middleware(['auth', 'verified'])
        ->name('patient.create');
});
