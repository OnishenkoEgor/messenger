import {NextRequest} from "next/server";
import {AuthLoginType, AuthRegisterType} from "@/utils/auth/type";

export const authenticate = (request: NextRequest): boolean => {
    // if (!process.env.BACKEND_URL) {
    //     return false;
    // }

    return false;
}

export const login = async (data: AuthLoginType) => {
    // if (!process.env.BACKEND_URL) {
    //     return;
    // }

    return fetch('http://localhost:8282' + '/auth/login').then(res => console.log(res));
}

export const register = async (data: AuthRegisterType) => {
    // if (!process.env.BACKEND_URL) {
    //     return;
    // }
// + '/auth/register'
    return fetch('http://localhost:8282/auth/check', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(res => console.log(res));
}
