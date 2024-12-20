'use client'

import {Tabs, Tab} from "@nextui-org/tabs";
import {Card, CardBody, CardHeader} from "@nextui-org/card"
import {ReactElement, useState} from "react";
import {LoginForm} from "@/components/login/LoginForm";
import {RegistrationForm} from "@/components/login/RegistrationForm";

export default function (): ReactElement {
    const [selected, setSelected] = useState('login');

    return (
        <div className={'flex flex-col justify-start items-center h-full pt-6'}>
            <Card radius={'none'}
                  isBlurred
                  className={'w-96'}>
                <CardHeader>
                    <h1 className={'w-full text-4xl font-bold text-center'}>Авторизация</h1>
                </CardHeader>
                <CardBody className="overflow-hidden">
                    <Tabs
                        fullWidth
                        aria-label="Tabs form"
                        selectedKey={selected}
                        size="lg"
                        onSelectionChange={(key) => setSelected(key.toString())}
                        radius={'none'}
                    >
                        <Tab key="login" title="Вход">
                            <LoginForm/>
                        </Tab>
                        <Tab key="sign-up" title="Регистрация">
                            <RegistrationForm/>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    );
}
