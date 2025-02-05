'use client'

import {FormEvent, ReactElement} from "react";
import {Form} from "@nextui-org/form";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {AuthRegisterInterface} from "@/utils/types/auth/type";
import {register} from "@/utils/auth/client/auth";
import {LoginFormProps} from "@/components/login/type";

export function RegistrationForm({onSuccess, onError}: LoginFormProps): ReactElement {

    const submit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const data: AuthRegisterInterface = {
            email: formData.get('email')?.toString() ?? '',
            name: formData.get('name')?.toString() ?? '',
            password: formData.get('password')?.toString() ?? '',
        };

        register(data).then(() => {
            onSuccess();
        }).catch((error) => {
            onError(error.message);
        });
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
        </Form>
    );
}

