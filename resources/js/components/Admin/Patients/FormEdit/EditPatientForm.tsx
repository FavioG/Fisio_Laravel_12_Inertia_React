import { Patient } from '@/types/Admin/Patient/Patient';
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface EditPatientForm {
    patient: Patient;
    onClose: () => void;
}

export default function EditPatientForm({ patient, onClose }: EditPatientForm) {
    const { data, setData, put, processing, errors } = useForm({
        name: patient.user.name,
        // first_surname: patient.user.first_surname,

        // ...otros campos de User y Patient
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        // put(route('admin.patients.update', patient.id), {
        //     onSuccess: () => onClose(),
        // });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Campos de User */}
            <div className="grid gap-4">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} disabled={processing} />
                <InputError message={errors.name} />

                {/* ...otros campos */}
            </div>

            <div className="mt-6 flex justify-end gap-3">
                <button type="button" onClick={onClose} className="rounded-md bg-slate-600 px-4 py-2 text-sm text-slate-200 hover:bg-slate-700">
                    Cancelar
                </button>
                <button type="submit" disabled={processing} className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700">
                    Guardar cambios
                </button>
            </div>
        </form>
    );
}
