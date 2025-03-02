<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    //Datos
    protected $fillable = [
        'user_id',
        'gender',
        'birth_date',
        'profession',
        'marital_status',
        'guardian_name',
        'guardian_phone',
        'guardian_relationship',
    ];

    //Relationships
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
