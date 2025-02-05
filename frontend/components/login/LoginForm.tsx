'use client'

import {FormEvent, ReactElement} from "react";
import {Form} from "@nextui-org/form";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {AuthLoginInterface} from "@/utils/types/auth/type";
import {login} from "@/utils/auth/client/auth";
import {LoginFormProps} from "@/components/login/type";

export function LoginForm({onSuccess, onError}: LoginFormProps): ReactElement {
    const submit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const data: AuthLoginInterface = {
            email: formData.get('email')?.toString() ?? '',
            password: formData.get('password')?.toString() ?? '',
        }

        login(data).then((): void => {
            onSuccess();
        }).catch(error => {
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
        </Form>

    );
}
