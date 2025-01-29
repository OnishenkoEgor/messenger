'use client'

import {logout as logoutRequest, login as loginRequest, register as registerRequest} from '../api/auth/auth';
import {CookieValueTypes, deleteCookie, getCookie, setCookie} from "cookies-next";
import {AuthLoginType, AuthRegisterType} from "@/utils/auth/type";

const cookieTokenName: string = 'auth_token';
const cookieUserInfoName: string = 'user_data';

export const login = async (data: AuthLoginType): Promise<void> => {
    return loginRequest(data).then(({token, data}): void => {
        const date = new Date(data.exp * 1000);

        setCookie('auth_token', token, {
            expires: date
        });
        setCookie('user_data', data.user, {
            expires: date
        });
    });
}

export const register = async (data: AuthRegisterType): Promise<any> => {
    return registerRequest(data).then(res => res);
}

export const logout = async (): Promise<void> => {
    const token: CookieValueTypes = getCookie(cookieTokenName);

    if (token) {
        return logoutRequest(token).then(() => {
            deleteCookie(cookieTokenName);
            deleteCookie(cookieUserInfoName);
        });
    }
}
