import {ReactElement} from "react";
import {Dropdown, DropdownTrigger, User} from "@nextui-org/react";
import UserInfoMenu from "@/components/header/UserInfoMenu";
import {getCurrentUser} from "@/utils/auth/server/auth";

const defaultUserData = {
    name: '',
    email: '',
    image: 'https://www.shutterstock.com/image-vector/avatar-gender-neutral-silhouette-vector-600nw-2526512481.jpg'
};

export async function UserInfo(): Promise<ReactElement> {
    const user = getCurrentUser() ?? defaultUserData;

    return (
        <Dropdown placement="bottom-start">
            <DropdownTrigger disableAnimation>
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
                <UserInfoMenu/>
            )}
        </Dropdown>
    )
}
