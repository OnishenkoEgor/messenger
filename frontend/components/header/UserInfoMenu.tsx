'use client'

import {ReactElement} from "react";
import {DropdownItem, DropdownMenu} from "@nextui-org/react";
import {logout as logoutUser} from "@/utils/auth/client/auth";
import {useRouter} from "next/navigation";
import {Routes} from "@/utils/enum/routes";

export default function UserInfoMenu(): ReactElement {
    const router = useRouter();

    const logout = () => {
        logoutUser().then(() => {
            router.push(Routes.LOGIN);
            router.refresh();
        });
    };

    return (
        <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem key="logout" color="danger" onPress={logout}>
                Log Out
            </DropdownItem>
        </DropdownMenu>
    );
}
