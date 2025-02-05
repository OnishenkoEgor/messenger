'use client'

import {logout as logoutRequest, login as loginRequest, register as registerRequest} from '../../api/auth/auth';
import {CookieValueTypes, deleteCookie, getCookie, setCookie} from "cookies-next";
import {
    AUTH_TOKEN_COOKIE,
    AUTH_USER_COOKIE,
    AuthLoginInterface,
    AuthRegisterInterface,
    AuthResponseInterface
} from "@/utils/types/auth/type";


export const login = async (data: AuthLoginInterface): Promise<void> => {
    return loginRequest(data).then((userData): void => {
        loginUser(userData);
    }).catch((error) => {
        throw error
    });
}

export const register = async (data: AuthRegisterInterface): Promise<void> => {
    return registerRequest(data).then((userData) => {
        loginUser(userData);
    }).catch((error) => {
        throw error;
    });
}

export const logout = async (): Promise<void> => {
    const token: CookieValueTypes = getCookie(AUTH_TOKEN_COOKIE);

    if (token) {
        return logoutRequest(token)
            .then(() => {
                logoutUser();
            }).catch((error) => {
                throw error;
            });
    }
}

function loginUser(data: AuthResponseInterface): void {
    const expiresDate = new Date(data.expires * 1000);

    setCookie(AUTH_TOKEN_COOKIE, data.token, {
        expires: expiresDate
    });
    setCookie(AUTH_USER_COOKIE, data.user, {
        expires: expiresDate
    });
}

function logoutUser(): void {
    deleteCookie(AUTH_TOKEN_COOKIE);
    deleteCookie(AUTH_USER_COOKIE);
}
