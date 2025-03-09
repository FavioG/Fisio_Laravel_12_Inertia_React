import { Patient } from '@/types/Admin/Patient/Patient';
import { Admin } from './Admin';

export type User = {
    id: number;
    name: string;
    first_surname: string;
    second_surname: string;
    ci: string;
    phone: string;
    province: string;
    address: string;
    email: string;
    photo: string;

    //Realciones
    patients?: Patient[];
    admins?: Admin[];
};
