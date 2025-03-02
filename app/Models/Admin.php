<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    //Data
    protected $fillable = [
        'user_id',
    ];

    //Relationships
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
