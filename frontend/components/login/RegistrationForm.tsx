'use client'
import {FormEvent, ReactElement} from "react";
import {Form} from "@nextui-org/form";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {register} from "@/utils/auth/auth";
import {AuthRegisterType} from "@/utils/auth/type";

export function RegistrationForm(): ReactElement {
    const submit = (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const data: AuthRegisterType = {
            email: formData.get('email')?.toString() ?? '',
            password: formData.get('password')?.toString() ?? '',
            inviteKey: formData.get('invite_key')?.toString() ?? ''
        }

        register(data).then(res => {
            console.log(res);
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

