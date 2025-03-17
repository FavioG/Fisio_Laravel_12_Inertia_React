<?php

namespace App\Http\Requests\Admin\Patient;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

class UpdatePatientRequest extends FormRequest
{

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
            'name' => 'string|min:2|max:255',
            'first_surname' => 'string|min:2|max:255',
            'second_surname' => 'string|min:2|max:255',
            'ci' => 'min:3|max:255', //falta agregar la validacion de ci duplicados
            'email' => 'string|lowercase|email|max:255|unique:' . User::class . ',email,' . $this->route('patient')->user->id,
            'phone' => 'min:3|max:255',
            'province' => 'min:3|max:255',
            'address' => 'min:3|max:255',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',

            //Datos Patient
            'gender' => 'string|min:3|max:255',
            'birth_date' => 'date',
            'profession' => 'string|min:3|max:255',
            'marital_status' => 'string|min:3|max:255',
            'guardian_name' => 'string|min:3|max:255',
            'guardian_phone' => 'string|min:3|max:255',
            'guardian_relationship' => 'string|min:3|max:255',
        ];
    }

    protected function prepareForValidation() {}
}
