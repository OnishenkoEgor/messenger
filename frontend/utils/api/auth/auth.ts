import {AuthLoginType, AuthRegisterType} from "@/utils/api/auth/type";
import axios from "axios";
import {MessageResponseInterface} from "@/utils/api/type";

const errorMessage = 'Unhandled backend auth error.'

export const login = async (data: AuthLoginType): Promise<{ token: string }> => {
    return axios.post('http://localhost:8282/auth/check', data).then(({data}) => {
        return data
    }).catch((res) => {
        return {
            message: res?.response?.data?.message ?? errorMessage,
            status: res.status
        }
    });
}

export const register = async (data: AuthRegisterType): Promise<MessageResponseInterface> => {
    return axios.post('http://localhost:8282/auth/register', data).then(({status, data}) => {
        return {
            message: data.message,
            status
        };
    }).catch((res) => {
        return {
            message: res?.response?.data?.message ?? errorMessage,
            status: res.status
        }
    })
}
