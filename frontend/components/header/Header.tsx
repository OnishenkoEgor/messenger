'use client'

import {ReactElement} from "react";
import {Logo} from "@/components/header/Logo";
import {UserInfo} from "@/components/header/UserInfo";

export function Header(): ReactElement {
    return (
        <header className={'flex px-6 py-3 justify-between'}>
            <Logo/>
            <UserInfo/>
        </header>
    )
}
