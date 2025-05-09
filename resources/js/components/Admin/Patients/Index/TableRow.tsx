import { Patient } from '@/types/Admin/Patient/Patient';

import Modal from '@/components/Admin/Patients/FormEdit/ModalEditPatient';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import DeletePatient from '../FormEdit/DeletePatient';
import EditPatientForm from '../FormEdit/EditPatientForm';
import GenderBadge from './GenderBadge';
import PatientPhoto from './PatientPhoto';
interface TableRowProps {
    patient: Patient;
    onEdit: (patient: Patient) => void;
    onDelete: (patient: Patient) => void;
}

export default function TableRow({ patient, onEdit, onDelete }: TableRowProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [isDeliting, setIsDeliting] = useState(false);
    const getValidGender = (gender: string): 'male' | 'female' | 'other' => {
        return ['male', 'female', 'other'].includes(gender) ? (gender as 'male' | 'female' | 'other') : 'other';
    };

    return (
        <>
            <tr className="transition-colors hover:bg-slate-800/40">
                {/* Foto */}
                <td className="px-4 py-4 whitespace-nowrap md:px-6">
                    <PatientPhoto patient={patient} />
                </td>

                {/* Nombre Completo */}
                <td className="px-4 py-4 text-sm font-medium text-slate-100 md:px-6">
                    {patient.user?.name} {patient.user?.first_surname} {patient.user.second_surname}
                </td>

                {/* CI */}
                <td className="px-4 py-4 text-sm text-slate-300 md:px-6">{patient.user.ci}</td>

                {/* Teléfono */}
                <td className="px-4 py-4 text-sm text-slate-300 md:px-6">{patient.user.phone}</td>

                {/* Género */}
                <td className="px-4 py-4 text-sm text-slate-300 md:px-6">
                    <GenderBadge gender={getValidGender(patient.gender)} />
                </td>

                {/* Acciones */}
                <td className="px-4 py-4 text-sm md:px-6">
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => setIsEditing(true)}
                            className="cursor-pointer rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-700/30 hover:text-blue-400"
                            title="Editar"
                        >
                            <PencilSquareIcon className="size-6 text-indigo-500" />
                        </button>
                        {/* <Link
                        href={route("admin.patients.edit", patient.id)}
                        className="p-1.5 text-slate-400 hover:text-blue-400 rounded-full hover:bg-slate-700/30 transition-colors"
                        title="Editar"
                    ></Link> */}

                        <button
                            onClick={() => setIsDeliting(true)}
                            className="cursor-pointer rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-700/30 hover:text-blue-400"
                            title="Eliminar"
                        >
                            <TrashIcon className="size-6 text-red-500" />
                        </button>
                    </div>
                </td>
            </tr>

            <Modal isOpen={isEditing} onClose={() => setIsEditing(false)} title="Editar Paciente">
                <EditPatientForm patient={patient} onClose={() => setIsEditing(false)} />
            </Modal>
            <Modal isOpen={isDeliting} onClose={() => setIsDeliting(false)} title="Eliminar">
                <DeletePatient patient={patient} onClose={() => setIsDeliting(false)} />
            </Modal>
        </>
    );
}
