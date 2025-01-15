import {ReactElement} from "react";
import {useAuth} from "@/utils/api/context/auth/AuthContext";
import {User} from "@nextui-org/react";

export function UserInfo(): ReactElement {
    const auth = useAuth();
    console.log('check');
    console.dir(auth);

    return (
        <>
            <User name={auth.email}/>
        </>
    )
}
