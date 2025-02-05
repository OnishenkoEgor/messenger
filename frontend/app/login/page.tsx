'use client'

import {Tabs, Tab} from "@nextui-org/tabs";
import {Card, CardBody, CardHeader} from "@nextui-org/card"
import {ReactElement, useState} from "react";
import {LoginForm} from "@/components/login/LoginForm";
import {RegistrationForm} from "@/components/login/RegistrationForm";
import {useRouter} from "next/navigation";
import {Alert} from "@nextui-org/alert";

export default function (): ReactElement {
    const [message, setMessage] = useState('');
    const [selected, setSelected] = useState('login');
    const router = useRouter();

    const onError = (message: string): void => {
        setMessage(message);
        setTimeout(() => {
            setMessage('');
        }, 2500)
    }

    const onSuccess = (): void => {
        router.push('/');
        router.refresh();
    }

    return (
        <div className={'flex flex-col justify-start items-center pt-6'}>
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
                            <LoginForm onSuccess={onSuccess} onError={onError}/>
                        </Tab>
                        <Tab key="sign-up" title="Регистрация">
                            <RegistrationForm onSuccess={onSuccess} onError={onError}/>
                        </Tab>
                    </Tabs>
                    <Alert title={message} color="danger" isVisible={message} description={''}/>
                </CardBody>
            </Card>
        </div>
    );
}
