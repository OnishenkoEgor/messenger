import {ReactElement} from "react";
import {Logo} from "@/components/header/Logo";
import {UserInfo} from "@/components/header/UserInfo";
import {Divider} from "@nextui-org/react";

export function Header(): ReactElement {
    return (
        <div>
            <header className={'flex px-6 py-3 justify-between items-center'}>
                <Logo/>
                <UserInfo/>
            </header>
            <Divider/>
        </div>
    )
}
