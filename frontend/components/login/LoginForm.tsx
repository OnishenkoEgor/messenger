'use client'
import {FormEvent, ReactElement, useState} from "react";
import {Form} from "@nextui-org/form";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Alert} from "@nextui-org/alert";
import {AuthLoginType} from "@/utils/auth/type";
import {login} from "@/utils/auth/auth";
import {useRouter} from "next/navigation";

export function LoginForm(): ReactElement {
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');
    const router = useRouter();

    const submit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const data: AuthLoginType = {
            email: formData.get('email')?.toString() ?? '',
            password: formData.get('password')?.toString() ?? '',
        }

        login(data).then((): void => {
            showMessage('Login success', 'success');
            router.push('/', {})
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
                value={'test@test.test'}
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
                value={'test'}
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
