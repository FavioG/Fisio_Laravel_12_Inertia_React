import { Patient } from '@/types/Admin/Patient/Patient';
import { useEffect, useState } from 'react';

interface PatientPhotoProps {
    patient: Patient;
}

export default function PatientPhoto({ patient }: PatientPhotoProps) {
    const [timestamp, setTimeStamp] = useState(Date.now());
    useEffect(() => {
        setTimeStamp(Date.now());
    }, [patient]);
    return (
        <div className="flex items-center">
            {patient.user.photo ? (
                <img
                    src={`http://127.0.0.1:8000/storage/${patient.user?.photo}?t=${timestamp}`}
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
