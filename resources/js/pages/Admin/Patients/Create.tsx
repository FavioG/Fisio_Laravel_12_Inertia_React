import { type BreadcrumbItem } from '@/types';

import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
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
            <Card className="mx-auto max-w-4xl">
                <CardHeader className="text-center">
                    <CardTitle>Registrar Paciente</CardTitle>
                    <p className="text-muted-foreground text-sm">Completa los datos del paciente</p>
                </CardHeader>

                <Separator />

                <CardContent className="p-6">
                    <form onSubmit={submit} className="grid grid-cols-1 gap-6 md:grid-cols-4" noValidate>
                        {/* Datos Personales */}
                        <div className="col-span-full space-y-4 md:col-span-1">
                            <div className="space-y-2">
                                <Label>Nombre</Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                    autoFocus
                                    placeholder="Nombre completo"
                                />
                                <InputError message={errors.name} />
                            </div>

                            <div className="space-y-2">
                                <Label>Apellido Paterno</Label>
                                <Input
                                    id="first_surname"
                                    value={data.first_surname}
                                    onChange={(e) => setData('first_surname', e.target.value)}
                                    required
                                    placeholder="Apellido paterno"
                                />
                                <InputError message={errors.first_surname} />
                            </div>
                            <div className="space-y-2">
                                <Label>Apellido Materno</Label>
                                <Input
                                    id="second_surname"
                                    value={data.second_surname}
                                    onChange={(e) => setData('second_surname', e.target.value)}
                                    required
                                    placeholder="Apellido paterno"
                                />
                                <InputError message={errors.second_surname} />
                            </div>

                            <div className="space-y-2">
                                <Label>C.I.</Label>
                                <Input
                                    id="ci"
                                    value={data.ci}
                                    onChange={(e) => setData('ci', e.target.value)}
                                    required
                                    placeholder="Apellido paterno"
                                />
                                <InputError message={errors.ci} />
                            </div>
                        </div>
                        <div className="col-span-full space-y-4 md:col-span-1">
                            <div className="space-y-2">
                                <Label>Teléfono</Label>
                                <Input
                                    id="phone"
                                    value={data.phone}
                                    onChange={(e) => setData('phone', e.target.value)}
                                    required
                                    placeholder="Apellido paterno"
                                />
                                <InputError message={errors.phone} />
                            </div>
                            <div className="space-y-2">
                                <Label>Provincia</Label>
                                <Input
                                    id="province"
                                    value={data.province}
                                    onChange={(e) => setData('province', e.target.value)}
                                    required
                                    placeholder="Apellido paterno"
                                />
                                <InputError message={errors.province} />
                            </div>
                            <div className="space-y-2">
                                <Label>Ubicación</Label>
                                <Input
                                    id="address"
                                    value={data.address}
                                    onChange={(e) => setData('address', e.target.value)}
                                    required
                                    placeholder="Apellido paterno"
                                />
                                <InputError message={errors.address} />
                            </div>
                            <div className="space-y-2">
                                <Label>Correo</Label>
                                <Input
                                    id="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    placeholder="Apellido paterno"
                                />
                                <InputError message={errors.email} />
                            </div>
                        </div>
                        <div className="col-span-full space-y-4 md:col-span-1">
                            <div className="space-y-2">
                                <Label>Estado civil</Label>
                                <Input
                                    id="marital_status"
                                    value={data.marital_status}
                                    onChange={(e) => setData('marital_status', e.target.value)}
                                    required
                                    placeholder="Apellido paterno"
                                />
                                <InputError message={errors.marital_status} />
                            </div>
                            <div className="space-y-2">
                                <Label>Nombre Tutor</Label>
                                <Input
                                    id="guardian_name"
                                    value={data.guardian_name}
                                    onChange={(e) => setData('guardian_name', e.target.value)}
                                    required
                                    placeholder="Apellido paterno"
                                />
                                <InputError message={errors.guardian_name} />
                            </div>
                            <div className="space-y-2">
                                <Label>Teléfono Tutor</Label>
                                <Input
                                    id="guardian_phone"
                                    value={data.guardian_phone}
                                    onChange={(e) => setData('guardian_phone', e.target.value)}
                                    required
                                    placeholder="Apellido paterno"
                                />
                                <InputError message={errors.guardian_phone} />
                            </div>
                            <div className="space-y-2">
                                <Label>Relación Tutor</Label>
                                <Input
                                    id="guardian_relationship"
                                    value={data.guardian_relationship}
                                    onChange={(e) => setData('guardian_relationship', e.target.value)}
                                    required
                                    placeholder="Apellido paterno"
                                />
                                <InputError message={errors.guardian_relationship} />
                            </div>
                        </div>
                        <div className="col-span-full space-y-4 md:col-span-1">
                            <div className="space-y-2">
                                <Label>Género</Label>
                                <select
                                    value={data.gender}
                                    onChange={(e) => setData('gender', e.target.value)}
                                    className="border-input bg-background w-full rounded-md border px-3 py-2 text-sm"
                                >
                                    <option value="">Selecciona</option>
                                    <option value="male">Masculino</option>
                                    <option value="female">Femenino</option>
                                    <option value="other">Otro</option>
                                </select>
                                <InputError message={errors.gender} />
                            </div>
                            <div className="space-y-2">
                                <Label>Fecha de Nacimiento</Label>
                                <Input
                                    id="birth_date"
                                    type="date"
                                    value={data.birth_date}
                                    onChange={(e) => setData('birth_date', e.target.value)}
                                    required
                                />
                                <InputError message={errors.birth_date} />
                            </div>
                            <div className="space-y-2">
                                <Label>Profesión</Label>
                                <Input
                                    id="profession"
                                    value={data.profession}
                                    onChange={(e) => setData('profession', e.target.value)}
                                    required
                                    placeholder="Apellido paterno"
                                />
                                <InputError message={errors.profession} />
                            </div>

                            <div className="space-y-2">
                                <Label>Foto</Label>
                                <Input
                                    id="photo"
                                    type="file"
                                    // value={data.photo}
                                    onChange={(e) => setData('photo', e.target.files?.[0] || null)}
                                    required
                                    placeholder="Apellido paterno"
                                />
                                <InputError message={errors.photo} />
                            </div>
                        </div>

                        {/* Botón Submit (full width en móvil) */}
                        <div className="col-span-full flex flex-col gap-3 md:flex-row">
                            <Button type="submit" variant={'default'} disabled={processing}>
                                {processing && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                                Registrar Paciente
                            </Button>

                            <Button type="button" variant="secondary" className="w-full md:w-auto" onClick={() => reset()} disabled={processing}>
                                Limpiar Formulario
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </AppLayout>
    );
}

/* 
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
                            <Label htmlFor="photo">Foto:</Label>
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
                                placeholder="Foto"
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
*/
