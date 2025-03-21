import { Patient } from '@/types/Admin/Patient/Patient';
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import PatientPhoto from '../Index/PatientPhoto';

interface EditPatientForm {
    patient: Patient;
    onClose: () => void;
}

interface UpdatePatientForm {
    name?: string;
    first_surname?: string;
    second_surname?: string;
    ci?: string;
    phone?: string;
    province?: string;
    address?: string;
    gender?: string;
    birth_date?: string;
    profession?: string;
    marital_status?: string;
    guardian_name?: string;
    guardian_phone?: string;
    guardian_relationship?: string;
    email?: string;
    existing_photo?: string;
    photo?: File | string | null; //File para la nueva foto | string para la ruta de la foto existente
    [key: string]: any; // ← Esto permite acceso dinámico
}

export default function EditPatientForm({ patient, onClose }: EditPatientForm) {
    const { data, setData, post, processing, errors } = useForm<UpdatePatientForm>({
        name: patient.user.name,
        first_surname: patient.user.first_surname,
        second_surname: patient.user.second_surname,
        ci: patient.user.ci,
        phone: patient.user.phone,
        province: patient.user.province,
        address: patient.user.address,
        email: patient.user.email,
        existin_photo: patient.user.photo,
        photo: null,

        //Campos de Patient
        gender: patient.gender,
        birth_date: patient.birth_date ? new Date(patient.birth_date).toISOString().split('T')[0] : '',
        profession: patient.profession,
        marital_status: patient.marital_status,
        guardian_name: patient.guardian_name,
        guardian_phone: patient.guardian_phone,
        guardian_relationship: patient.guardian_relationship,
        _method: 'put',
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.patients.update', patient.id), {
            onSuccess: () => onClose(),
            onError: (errors) => console.log(errors),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Campos de User */}
            <div className="grid gap-4">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} disabled={processing} />
                <InputError message={errors.name} />

                <Label htmlFor="first_surname">Apellido Paterno</Label>
                <Input
                    id="first_surname"
                    value={data.first_surname}
                    onChange={(e) => setData('first_surname', e.target.value)}
                    disabled={processing}
                />
                <InputError message={errors.first_surname} />

                <Label htmlFor="second_surname">Apellido Materno</Label>
                <Input
                    id="second_surname"
                    value={data.second_surname}
                    onChange={(e) => setData('second_surname', e.target.value)}
                    disabled={processing}
                />
                <InputError message={errors.second_surname} />

                <Label htmlFor="ci">C.I.</Label>
                <Input id="ci" value={data.ci} onChange={(e) => setData('ci', e.target.value)} disabled={processing} />
                <InputError message={errors.ci} />

                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" value={data.phone} onChange={(e) => setData('phone', e.target.value)} disabled={processing} />
                <InputError message={errors.phone} />

                <Label htmlFor="province">Provincia</Label>
                <Input id="province" value={data.province} onChange={(e) => setData('province', e.target.value)} disabled={processing} />
                <InputError message={errors.province} />

                <Label htmlFor="address">Dirección</Label>
                <Input id="address" value={data.address} onChange={(e) => setData('address', e.target.value)} disabled={processing} />
                <InputError message={errors.address} />

                <Label htmlFor="email">Email</Label>
                <Input id="email" value={data.email} onChange={(e) => setData('email', e.target.value)} disabled={processing} />
                <InputError message={errors.email} />

                <Label htmlFor="photo">Foto</Label>
                <PatientPhoto patient={patient} />
                <Input
                    id="photo"
                    type="file"
                    // value={data.existin_photo[0]}
                    onChange={(e) => setData('photo', e.target.files?.[0] || null)}
                    disabled={processing}
                />
                <InputError message={errors.photo} />

                <Label htmlFor="gender">Género</Label>
                <Input id="gender" value={data.gender} onChange={(e) => setData('gender', e.target.value)} disabled={processing} />
                <InputError message={errors.gender} />

                <Label htmlFor="birth_date">Fecha de Nacimiento</Label>
                <Input id="birth_date" value={data.birth_date} onChange={(e) => setData('birth_date', e.target.value)} disabled={processing} />
                <InputError message={errors.birth_date} />

                <Label htmlFor="profession">Profesión</Label>
                <Input id="profession" value={data.profession} onChange={(e) => setData('profession', e.target.value)} disabled={processing} />
                <InputError message={errors.profession} />

                <Label htmlFor="marital_status">Estado Civil</Label>
                <Input
                    id="marital_status"
                    value={data.marital_status}
                    onChange={(e) => setData('marital_status', e.target.value)}
                    disabled={processing}
                />
                <InputError message={errors.marital_status} />

                <Label htmlFor="guardian_name">Nombre del Guardian</Label>
                <Input
                    id="guardian_name"
                    value={data.guardian_name}
                    onChange={(e) => setData('guardian_name', e.target.value)}
                    disabled={processing}
                />
                <InputError message={errors.guardian_name} />

                <Label htmlFor="guardian_phone">Teléfono del Guardian</Label>
                <Input
                    id="guardian_phone"
                    value={data.guardian_phone}
                    onChange={(e) => setData('guardian_phone', e.target.value)}
                    disabled={processing}
                />
                <InputError message={errors.guardian_phone} />

                <Label htmlFor="guardian_relationship">Relación con el Guardian</Label>
                <Input
                    id="guardian_relationship"
                    value={data.guardian_relationship}
                    onChange={(e) => setData('guardian_relationship', e.target.value)}
                    disabled={processing}
                />
                <InputError message={errors.guardian_relationship} />
                {/* ...otros campos */}
            </div>
            <DialogFooter>
                <Button variant="secondary" onClick={onClose} type="button">
                    Cancelar
                </Button>

                <Button disabled={processing} asChild>
                    <button type="submit">Guardar Cambios</button>
                </Button>
            </DialogFooter>
        </form>
    );
}
