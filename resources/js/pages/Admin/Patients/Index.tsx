// import TableRow from '@/components/Admin/Patients/Index/TableRow';
// import Table from '@/components/Common/Table/Table-back';
import DeletePatient from '@/components/Admin/Patients/FormEdit/DeletePatient';
import EditPatientForm from '@/components/Admin/Patients/FormEdit/EditPatientForm';
import ModalEditPatient from '@/components/Admin/Patients/FormEdit/ModalEditPatient';
import PatientPhoto from '@/components/Admin/Patients/Index/PatientPhoto';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Patient } from '@/types/Admin/Patient/Patient';
import { Head } from '@inertiajs/react';
import { UserMinus, UserPen } from 'lucide-react';
import { useState } from 'react';
interface PatientListProps {
    patients: Patient[];
    onClose: () => void;
}

export default function Index({ patients, onClose }: PatientListProps) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Lista de Pacientes',
            href: route('admin.patients.index'),
        },
    ];
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    return (
        <>
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title="Registrar Paciente" />
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Foto</TableHead>
                            <TableHead>NOMBRE</TableHead>
                            <TableHead>C.I.</TableHead>
                            <TableHead>TELÉFONO</TableHead>
                            <TableHead>GENERO</TableHead>
                            <TableHead className="text-right">ACCIONES</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {patients.map((patient) => (
                            <TableRow>
                                <TableCell className="font-medium">
                                    <PatientPhoto patient={patient} />
                                </TableCell>
                                <TableCell>
                                    {patient.user.name} {patient.user.first_surname} {patient.user.second_surname}
                                </TableCell>
                                <TableCell>{patient.user.ci}</TableCell>
                                <TableCell>{patient.user.phone}</TableCell>
                                <TableCell>{patient.gender}</TableCell>
                                <TableCell className="space-x-3 text-right">
                                    <Button
                                        variant="ghost"
                                        onClick={() => {
                                            setSelectedPatient(patient);
                                            setIsEditing(true);
                                        }}
                                    >
                                        <UserPen className="size-6 text-indigo-500" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        onClick={() => {
                                            setSelectedPatient(patient);
                                            setIsDeleting(true);
                                        }}
                                    >
                                        <UserMinus className="size-6 text-red-500" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </AppLayout>
            {selectedPatient && (
                <>
                    <ModalEditPatient isOpen={isEditing} onClose={() => setIsEditing(true)} title="Editar Paciente">
                        <EditPatientForm patient={selectedPatient} onClose={() => setIsEditing(false)}></EditPatientForm>
                    </ModalEditPatient>

                    <ModalEditPatient isOpen={isDeleting} onClose={() => setIsDeleting(false)} title="Editar Paciente">
                        <DeletePatient patient={selectedPatient} onClose={() => setIsDeleting(false)}></DeletePatient>
                    </ModalEditPatient>
                </>
            )}
        </>
    );
}
