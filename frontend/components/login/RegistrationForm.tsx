'use client'
import {FormEvent, ReactElement, useState} from "react";
import {Form} from "@nextui-org/form";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {register} from "@/utils/api/auth/auth";
import {AuthRegisterType} from "@/utils/api/auth/type";
import {Alert} from "@nextui-org/alert";

export function RegistrationForm(): ReactElement {
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');

    const submit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const data: AuthRegisterType = {
            email: formData.get('email')?.toString() ?? '',
            password: formData.get('password')?.toString() ?? '',
            inviteKey: formData.get('invite_key')?.toString() ?? ''
        }

        register(data).then(({message, status}) => {
            showMessage(message, status === 200 ? 'success' : 'danger');
        });
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

