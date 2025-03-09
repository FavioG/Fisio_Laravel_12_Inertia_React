import TableRow from '@/components/Admin/Patients/Index/TableRow';
import Table from '@/components/Common/Table/Table';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { Patient } from '@/types/Admin/Patient/Patient';
import { User } from '@/types/Admin/User';
import { Head } from '@inertiajs/react';

interface PatientListProps {
    auth: any;
    patients: Patient[];
    user: User;
    patient: any;
    handleEdit: () => void;
    handleDelete: () => void;
}

const handleEdit = (): void => {
    console.log('hola');
};
const handleDelete = (): void => {
    console.log('hola');
};
export default function Index({ patients, handleEdit, handleDelete }: PatientListProps) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Lista de Pacientes',
            href: route('admin.patients.index'),
        },
    ];

    const headers = ['FOTO', 'NOMBRE', 'C.I.', 'TELÉFONO', 'GENERO', 'ACCIONES'];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Registrar Paciente" />
            <Table headers={headers}>
                {patients.map((patient) => (
                    <TableRow key={patient.id} patient={patient} onEdit={handleEdit} onDelete={handleDelete} />
                ))}
            </Table>
        </AppLayout>
    );
}
