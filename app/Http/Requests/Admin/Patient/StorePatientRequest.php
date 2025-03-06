<?php

namespace App\Http\Requests\Admin\Patient;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class StorePatientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    //Crear reglas de validación
    public function rules(): array
    {
        return [

            //Datos User
            'name' => 'required|string|min:2|max:255',
            'first_surname' => 'required|string|min:2|max:255',
            'second_surname' => 'required|string|min:2|max:255',
            'ci' => 'required|min:3|max:255', //falta agregar la validacion de ci duplicados
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'phone' => 'required|min:3|max:255',
            'province' => 'required|min:3|max:255',
            'address' => 'required|min:3|max:255',
            'photo' => 'required|image|mimes:jpeg,png,jpg|max:2048',

            //Datos Patient
            'gender' => 'required|string|min:3|max:255',
            'birth_date' => 'required|date',
            'profession' => 'required|string|min:3|max:255',
            'marital_status' => 'required|string|min:3|max:255',
            'guardian_name' => 'required|string|min:3|max:255',
            'guardian_phone' => 'required|string|min:3|max:255',
            'guardian_relationship' => 'required|string|min:3|max:255',
        ];
    }

    //Función predeterminada para Preparar validación antes de crear usuarios
    protected function prepareForValidation()
    {
        //Ejemplo

        // $data = $this->all();
        // if ($this->filled('password')) {
        //     $data['password'] = bcrypt($data['password']);
        // }

        // $this->replace($data);
    }
}
