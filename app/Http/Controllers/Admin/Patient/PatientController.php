<?php

namespace App\Http\Controllers\Admin\Patient;

use Exception;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Patient\StorePatientRequest;
use App\Http\Requests\Admin\Patient\UpdatePatientRequest;
use Illuminate\Support\Facades\Storage;

class PatientController extends Controller
{
    public function index()
    {
        //Listar pacientes
        $patients = Patient::with('user')->get();
        return Inertia::Render('Admin/Patients/Index', compact('patients'));
    }

    public function create()
    {
        //Vista de crear paciente
        return Inertia::render('Admin/Patients/Create');
    }

    public function store(StorePatientRequest $request)
    {
        //Crear nuevo Paciente
        DB::beginTransaction();
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
            DB::commit();
            return to_route('admin.patients.index')->with('success', 'Paciente creado exitosamente');
        } catch (Exception $e) {
            DB::rollBack();
            return back()->withErrors('error', 'Error al crear paciente: ' . $e->getMessage());
        }
    }

    //Función para manejar la lógica para las fotos
    private function handlePatientPhoto(Request $request, Patient $patient)
    {
        $photo = $request->file('photo');

        // $extension = $request->file('photo')->extension();

        //Convertir formato de imagen a jpg cuando no sea jpeg, png o jpg
        // $safeExtension = in_array($extension, ['jpeg', 'png', 'jpg']) ? $extension : 'jpg';

        //Guardar imagen con nombre de id y extension
        $imageName = $patient->id . '.' . "png";

        //Guardar imagen en la carpeta storage/app/private/img/patient
        $path = $request->file('photo')->storeAs('img/patient', $imageName);

        //Guardar ruta relativa en la BD como img/patient/1.jpg
        $patient->user->photo = str_replace('public/', '', $path);
        $patient->user->save();
    }

    public function show(string $id)
    {
        //
    }

    public function update(UpdatePatientRequest $request, Patient $patient)
    {

        DB::beginTransaction();
        try {

            $patient->user->update($request->validated());
            // unset($patient->user['photo']);
            $patient->update($request->validated());
            // dd(Storage::exists('public/storage/img/patient/1.png'));
            // if (Storage::disk('public')->exists($patient->user->photo)) {
            //     return;
            // } 

            if ($request->hasFile('photo')) {
                // dd($request->all());
                $this->handlePhotoUpdate($request, $patient);
            }

            DB::commit();
            return to_route('admin.patients.index')->with('success', 'Paciente actualizado exitosamente')->with('patient', $patient->fresh());
        } catch (Exception $e) {
            DB::rollBack();
            return back()->withErrors('error', 'Error al actualizar paciente: ' . $e->getMessage());
        }
    }

    public function handlePhotoUpdate(Request $request, Patient $patient)
    {
        //Actualizar foto de paciente
        if ($patient->user->photo) {
            Storage::disk('public')->delete($patient->user->photo);
        }

        //Guardar la nueva foto
        $photo = $request->file('photo');

        //Guardar imagen con nombre de id y extension
        $imageName = $patient->id . '.' . "png";

        //Guardar imagen en la carpeta storage/app/private/img/patient
        $path = $photo->storeAs('img/patient', $imageName, 'public');

        //Guardar ruta relativa en la BD como img/patient/1.jpg
        $updateRute = $patient->user->photo = str_replace('public/', '', $path);
        $patient->user->update(['photo' => $updateRute]);
    }

    public function destroy(Patient $patient)
    {
        //
        DB::beginTransaction();
        try {
            $patient->delete();
            $patient->user->delete();
            if ($patient->user->photo) {
                Storage::disk('public')->delete($patient->user->photo);
            }
            DB::commit();
        } catch (exception $e) {
            DB::rollBack();
            return back()->withErrors('error', 'Error al eliminar paciente: ' . $e->getMessage());
        }
    }
}
