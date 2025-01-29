'use client'

import {ReactElement, useEffect, useState} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User} from "@nextui-org/react";
import {getCookie} from "cookies-next";
import {logout as logoutUser} from "@/utils/auth/auth";
import {useRouter, usePathname} from "next/navigation";

const defaultUserData = {
    name: '',
    email: '',
    image: 'https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2526512481.jpg'
};

export function UserInfo(): ReactElement {
    const router = useRouter();
    const pathname = usePathname();

    const [user, setUser] = useState(defaultUserData);

    useEffect(() => {
        const userData = getCookie('user_data');
        if (userData) {
            setUser(JSON.parse(userData));
        } else {
            setUser(defaultUserData);
        }
    }, [pathname]);

    const logout = () => {
        logoutUser().then(() => {
            router.push('/login');
        });
    }
    return (
        <Dropdown placement="bottom-start">
            <DropdownTrigger>
                <User
                    as="button"
                    avatarProps={{
                        isBordered: true,
                        src: user.image,
                    }}
                    className="transition-transform"
                    description={user.email}
                    name={user.name}
                />
            </DropdownTrigger>
            {user.name && (
                <DropdownMenu aria-label="User Actions" variant="flat">
                    <DropdownItem key="logout" color="danger" onPress={logout}>
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            )}
        </Dropdown>
    )
}
