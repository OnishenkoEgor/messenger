import 'server-only';
import {cookies} from "next/headers";
import {getCookie, hasCookie} from "cookies-next";
import {UserType} from "@/utils/api/user/type";
import {AUTH_TOKEN_COOKIE, AUTH_USER_COOKIE} from "@/utils/types/auth/type";


export const isUserLoggedIn = (): boolean => {
    return hasCookie(AUTH_TOKEN_COOKIE, {cookies});
}

export const getCurrentUser = (): UserType | null => {
    const userData = getCookie(AUTH_USER_COOKIE, {cookies});

    return userData ? JSON.parse(userData) : null;
}
