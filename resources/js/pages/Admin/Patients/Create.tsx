import { type BreadcrumbItem } from '@/types';

import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { Label } from '@radix-ui/react-label';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Registrar Paciente',
        href: route('admin.patients.create'),
    },
];

interface RegisterForm {
    name: string;
    first_surname: string;
    second_surname: string;
    ci: string;
    phone: string;
    province: string;
    address: string;
    gender: string;
    birth_date: string;
    profession: string;
    marital_status: string;
    guardian_name: string;
    guardian_phone: string;
    guardian_relationship: string;
    email: string;
    photo: File | null;
    [key: string]: any; // ← Esto permite acceso dinámico
}

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm<RegisterForm>({
        name: '',
        first_surname: '',
        second_surname: '',
        ci: '',
        phone: '',
        province: '',
        address: '',
        gender: '',
        birth_date: '',
        profession: '',
        marital_status: '',
        guardian_name: '',
        guardian_phone: '',
        guardian_relationship: '',
        email: '',
        photo: null,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('admin.patients.store'), {
            // onFinish: () => reset('password', 'password_confirmation'),
        });
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Registrar Paciente" />
            <div className="mx-auto max-w-4xl p-10">
                <form className="col-auto flex gap-6" onSubmit={submit} noValidate>
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name:</Label>
                            <Input
                                id="name"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                disabled={processing}
                                placeholder="Full name"
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="first_surname">Apellido Paterno:</Label>
                            <Input
                                id="first_surname"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="first_surname"
                                value={data.first_surname}
                                onChange={(e) => setData('first_surname', e.target.value)}
                                disabled={processing}
                                placeholder="Apellido Paterno"
                            />
                            <InputError message={errors.first_surname} className="mt-2" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="second_surname">Apellido Materno:</Label>
                            <Input
                                id="second_surname"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="second_surname"
                                value={data.second_surname}
                                onChange={(e) => setData('second_surname', e.target.value)}
                                disabled={processing}
                                placeholder="Apellido Materno"
                            />
                            <InputError message={errors.second_surname} className="mt-2" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="ci">C.I.:</Label>
                            <Input
                                id="ci"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="ci"
                                value={data.ci}
                                onChange={(e) => setData('ci', e.target.value)}
                                disabled={processing}
                                placeholder="Número de carnet"
                            />
                            <InputError message={errors.ci} className="mt-2" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="phone">Celular:</Label>
                            <Input
                                id="phone"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="phone"
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                disabled={processing}
                                placeholder="71292833"
                            />
                            <InputError message={errors.phone} className="mt-2" />
                        </div>
                    </div>
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="province">Provincia:</Label>
                            <Input
                                id="province"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="province"
                                value={data.province}
                                onChange={(e) => setData('province', e.target.value)}
                                disabled={processing}
                                placeholder="Provincia"
                            />
                            <InputError message={errors.province} className="mt-2" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="address">Ubicación:</Label>
                            <Input
                                id="address"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="address"
                                value={data.address}
                                onChange={(e) => setData('address', e.target.value)}
                                disabled={processing}
                                placeholder="Ubicación"
                            />
                            <InputError message={errors.address} className="mt-2" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="gender">Genero:</Label>
                            <Input
                                id="gender"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="gender"
                                value={data.gender}
                                onChange={(e) => setData('gender', e.target.value)}
                                disabled={processing}
                                placeholder="Genero"
                            />
                            <InputError message={errors.gender} className="mt-2" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="birth_date">Fecha de nacimiento:</Label>
                            <Input
                                id="birth_date"
                                type="date"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="birth_date"
                                value={data.birth_date}
                                onChange={(e) => setData('birth_date', e.target.value)}
                                disabled={processing}
                                placeholder="Genero"
                            />
                            <InputError message={errors.birth_date} className="mt-2" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="profession">Profesión:</Label>
                            <Input
                                id="profession"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="profession"
                                value={data.profession}
                                onChange={(e) => setData('profession', e.target.value)}
                                disabled={processing}
                                placeholder="Albañil"
                            />
                            <InputError message={errors.profession} className="mt-2" />
                        </div>
                    </div>
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="marital_status">Estado civil:</Label>
                            <Input
                                id="marital_status"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="marital_status"
                                value={data.marital_status}
                                onChange={(e) => setData('marital_status', e.target.value)}
                                disabled={processing}
                                placeholder="Soltero"
                            />
                            <InputError message={errors.marital_status} className="mt-2" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="guardian_name">Nombre Tutor:</Label>
                            <Input
                                id="guardian_name"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="guardian_name"
                                value={data.guardian_name}
                                onChange={(e) => setData('guardian_name', e.target.value)}
                                disabled={processing}
                                placeholder="Felipe"
                            />
                            <InputError message={errors.guardian_name} className="mt-2" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="guardian_phone">Teléfono Tutor:</Label>
                            <Input
                                id="guardian_phone"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="guardian_phone"
                                value={data.guardian_phone}
                                onChange={(e) => setData('guardian_phone', e.target.value)}
                                disabled={processing}
                                placeholder="71292833"
                            />
                            <InputError message={errors.guardian_phone} className="mt-2" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="guardian_relationship">Relación Tutor:</Label>
                            <Input
                                id="guardian_relationship"
                                type="text"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="guardian_relationship"
                                value={data.guardian_relationship}
                                onChange={(e) => setData('guardian_relationship', e.target.value)}
                                disabled={processing}
                                placeholder="Albañil"
                            />
                            <InputError message={errors.guardian_relationship} className="mt-2" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="photo">Relación Tutor:</Label>
                            <Input
                                id="photo"
                                type="file"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="photo"
                                // value={data.photo}
                                onChange={(e) => setData('photo', e.target.files?.[0] || null)}
                                disabled={processing}
                                placeholder="Albañil"
                            />
                            <InputError message={errors.photo} className="mt-2" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                tabIndex={2}
                                autoComplete="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                disabled={processing}
                                placeholder="email@example.com"
                            />
                            <InputError message={errors.email} />
                        </div>

                        <Button type="submit" className="mt-2 w-full" tabIndex={5} disabled={processing}>
                            {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Create account
                        </Button>
                    </div>

                    <div className="text-muted-foreground text-center text-sm">
                        Already have an account?{' '}
                        <TextLink href={route('login')} tabIndex={6}>
                            Log in
                        </TextLink>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
