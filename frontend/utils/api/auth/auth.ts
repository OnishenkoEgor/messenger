import {AuthLoginInterface, AuthRegisterInterface, AuthResponseInterface} from "@/utils/types/auth/type";
import {post} from "@/utils/api/api";

export const login = async (data: AuthLoginInterface): Promise<AuthResponseInterface> => {
    return post<AuthResponseInterface>('/auth/check', data).then(({response}) => response);
}

export const register = async (data: AuthRegisterInterface): Promise<AuthResponseInterface> => {
    return post<AuthResponseInterface>('/auth/register', data).then(({response}) => response);
}

export const logout = async (token: string): Promise<void> => {
    return post<void>('/auth/logout', {token}).then(() => {

    });
}

