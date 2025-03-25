import { Button } from '@/components/ui/button';
import { FormEventHandler } from 'react';

import HeadingSmall from '@/components/heading-small';
import { Dialog, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Patient } from '@/types/Admin/Patient/Patient';
import { useForm } from '@inertiajs/react';

interface DeletePatientPros {
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
    // existing_photo?: string;
    photo?: File | string | null; //File para la nueva foto | string para la ruta de la foto existente
    [key: string]: any; // ← Esto permite acceso dinámico
}
export default function DeletePatient({ patient, onClose }: DeletePatientPros) {
    const {
        data,
        setData,
        delete: destroy,
        processing,
        errors,
    } = useForm<UpdatePatientForm>({
        name: patient.user.name,
        first_surname: patient.user.first_surname,
        second_surname: patient.user.second_surname,
        ci: patient.user.ci,
        phone: patient.user.phone,
        province: patient.user.province,
        address: patient.user.address,
        email: patient.user.email,
        // existin_photo: patient.user.photo,
        photo: patient.user.photo,

        //Campos de Patient
        gender: patient.gender,
        birth_date: patient.birth_date ? new Date(patient.birth_date).toISOString().split('T')[0] : '',
        profession: patient.profession,
        marital_status: patient.marital_status,
        guardian_name: patient.guardian_name,
        guardian_phone: patient.guardian_phone,
        guardian_relationship: patient.guardian_relationship,
    });

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        destroy(route('admin.patients.destroy', patient.id), {
            onSuccess: () => onClose(),
            onError: (errors) => console.log(errors),
        });
    };
    return (
        <div className="space-y-6">
            <HeadingSmall title="Delete account" description="Delete your account and all of its resources" />
            <div className="space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10">
                <div className="relative space-y-0.5 text-red-600 dark:text-red-100">
                    <p className="font-medium">Warning</p>
                    <p className="text-sm">Please proceed with caution, this cannot be undone.</p>
                </div>
                <Dialog>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid gap-2"></div>

                        <DialogFooter className="gap-2">
                            <DialogClose asChild>
                                <Button variant="secondary" onClick={onClose}>
                                    Cancel
                                </Button>
                            </DialogClose>

                            <Button variant="destructive" disabled={processing} asChild>
                                <button type="submit">Delete account</button>
                            </Button>
                        </DialogFooter>
                    </form>
                </Dialog>
            </div>
        </div>
    );
}
