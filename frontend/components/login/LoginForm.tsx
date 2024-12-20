'use client'
import {ReactElement} from "react";
import {Form} from "@nextui-org/form";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";

export function LoginForm(): ReactElement {
    return (
        <Form className={'w-full grid grid-cols-1 gap-4 pt-4'}>
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
