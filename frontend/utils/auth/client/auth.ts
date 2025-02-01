'use client'

import {logout as logoutRequest, login as loginRequest, register as registerRequest} from '../../api/auth/auth';
import {CookieValueTypes, deleteCookie, getCookie, setCookie} from "cookies-next";
import {AUTH_TOKEN_COOKIE, AUTH_USER_COOKIE, AuthLoginInterface, AuthRegisterInterface} from "@/utils/types/auth/type";


export const login = async (data: AuthLoginInterface): Promise<void> => {
    return loginRequest(data).then(({token, data}): void => {
        const date = new Date(data.exp * 1000);

        setCookie(AUTH_TOKEN_COOKIE, token, {
            expires: date
        });
        setCookie(AUTH_USER_COOKIE, data.user, {
            expires: date
        });
    });
}

export const register = async (data: AuthRegisterInterface): Promise<string> => {
    return registerRequest(data);
}

export const logout = async (): Promise<void> => {
    const token: CookieValueTypes = getCookie(AUTH_TOKEN_COOKIE);

    if (token) {
        return logoutRequest(token).then(() => {
            deleteCookie(AUTH_TOKEN_COOKIE);
            deleteCookie(AUTH_USER_COOKIE);
        });
    }
}
