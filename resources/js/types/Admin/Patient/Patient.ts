import { User } from '@/types/Admin/User';
// import { User } from '../User';

export type Patient = {
    id: number;
    user_id: number;
    user: User;
    gender: string;
    birth_date: Date | string;
    profession: string;
    marital_status: string;
    guardian_name: string;
    guardian_phone: string;
    guardian_relationship: string;
};
