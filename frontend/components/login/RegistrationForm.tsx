'use client'
import {FormEvent, ReactElement, useState} from "react";
import {Form} from "@nextui-org/form";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Alert} from "@nextui-org/alert";
import {useRouter} from "next/navigation";
import {AuthRegisterType} from "@/utils/auth/type";
import {register} from "@/utils/api/auth/auth";
import {setCookie} from "cookies-next";

export function RegistrationForm(): ReactElement {
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');
    const router = useRouter();

    const submit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const data: AuthRegisterType = {
            email: formData.get('email')?.toString() ?? '',
            name: formData.get('name')?.toString() ?? '',
            password: formData.get('password')?.toString() ?? '',
        };

        register(data).then((token) => {
            if (token) {
                showMessage('Login success', 'success');
                setCookie('auth_token', token);

                setTimeout(() => {
                    router.push('/')
                }, 1250);
            }
        })
    }

    const showMessage = (message: string, type: 'danger' | 'success') => {
        setType(type);
        setMessage(message);

        setTimeout(() => {
            setType('');
            setMessage('');
        }, 2500)
    }

    return (
        <Form className={'w-full grid grid-cols-1 gap-4 pt-4'} onSubmit={submit}>
            <Input
                isRequired
                label="Почта"
                labelPlacement="outside"
                name="email"
                placeholder="Введите почту"
                type="text"
                radius={'none'}
                size={'lg'}
            />
            <Input
                isRequired
                label="Имя"
                labelPlacement="outside"
                name="name"
                placeholder="Введите имя"
                type="text"
                radius={'none'}
                size={'lg'}
            />
            <Input
                isRequired
                label="Пароль"
                labelPlacement="outside"
                name="password"
                placeholder="Введите пароль"
                type="text"
                radius={'none'}
                size={'lg'}
            />
            <Input
                isRequired
                label="Ключ приглашения"
                labelPlacement="outside"
                name="invite_key"
                placeholder="Введите ключ приглашения"
                type="text"
                radius={'none'}
                size={'lg'}
                value={'test_invite_key'}
            />
            <Button className={'mt-3'}
                    color={'default'}
                    size="lg"
                    fullWidth
                    type="submit"
                    radius={'none'}
            >Отправить</Button>
            <Alert title={message} color={type} isVisible={message && type} description={''}/>
        </Form>
    );
}

