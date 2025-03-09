import { Patient } from '@/types/Admin/Patient/Patient';

interface PatientPhotoProps {
    patient: Patient;
}
export default function PatientPhoto({ patient }: PatientPhotoProps) {
    console.log(patient.user.photo);
    return (
        <div className="flex items-center">
            {patient.user.photo ? (
                <img
                    // src={`http://127.0.0.1:8000/storage/img/patient/${patient.id}.jpg`}
                    src={`http://127.0.0.1:8000/storage/${patient.user?.photo}`}
                    // http://127.0.0.1:8000/storage/img/patient/5.jpg
                    alt="Foto"
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-600"
                />
            ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-slate-400">
                    <span className="text-sm">{patient.user.name[0]}</span>
                </div>
            )}
        </div>
    );
}
