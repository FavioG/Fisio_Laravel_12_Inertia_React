<?php

namespace App\Http\Controllers\Admin\Patient;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Patient;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Patient\StorePatientRequest;
use Exception;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //Vista de crear paciente
        return Inertia::render('Admin/Patients/Create');
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store(StorePatientRequest $request)
    {
        //Crear nuevo Paciente
        try {
            // dd(User::create($request->validated()));
            $user = User::create($request->validated());
            $patient = new Patient($request->validated());
            $patient->user_id = $user->id;
            $patient->save();

            //Procesar imagen
            if ($request->hasFile('photo')) {
                $this->handlePatientPhoto($request, $patient);
            }

            return to_route('admin.patients.create')->with('success', 'Paciente creado exitosamente');
        } catch (Exception $e) {
            return back()->withErrors('error', 'Error al crear paciente: ' . $e->getMessage());
        }
    }

    private function handlePatientPhoto(Request $request, Patient $patient)
    {
        $photo = $request->file('photo');

        $extension = $request->file('photo')->extension();

        //Convertir formato de imagen a jpg cuando no sea jpeg, png o jpg
        $safeExtension = in_array($extension, ['jpeg', 'png', 'jpg']) ? $extension : 'jpg';

        //Guardar imagen con nombre de id y extension
        $imageName = $patient->id . '.' . $safeExtension;

        //Guardar imagen en la carpeta public/img/patient
        $path = $request->file('photo')->storeAs('img/patient', $imageName);

        //Guardar ruta relativa en la BD como img/patient/1.jpg
        $patient->user->photo = str_replace('public/', '', $path);
        $patient->user->save();

        // if ($request->hasfile('photo')) {
        //     //Forzar extensión segura
        //     $extension = $request->file('photo')->extension();

        //     //Convertir formato de imagen a jpg cuando no sea jpeg, png o jpg
        //     $safeExtension = in_array($extension, ['jpeg', 'png', 'jpg']) ? $extension : 'jpg';

        //     //Guardar imagen con nombre de id y extension
        //     $patientId = $patient->id;
        //     $imageName = $patientId . '.' . $safeExtension;

        //     //Guardar imagen en la carpeta public/img/patient
        //     $path = $request->file('photo')->storeAs('public/img/patient', $imageName);

        //     //Guardar ruta relativa en la BD
        //     $user->photo = str_replace('public/', '', $path);
        //     $user->save();
        // }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
