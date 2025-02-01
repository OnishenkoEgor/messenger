import {AuthLoginInterface,AuthRegisterInterface} from "@/utils/types/auth/type";
import axios from "axios";


export const login = async (data: AuthLoginInterface): Promise<{ token: string, data: { user: { email: string, name: string, image: string, roles: [] }, exp: number } }> => {
    return axios.post('http://localhost:8282/auth/check', data).then(({data}) => data)
}

export const register = async (data: AuthRegisterInterface): Promise<string> => {
    return axios.post('http://localhost:8282/auth/register', data).then((res) => res.data.token);
}

export const logout = async (token: string): Promise<void> => {
    return axios.post('http://localhost:8282/auth/logout', {token});
}

