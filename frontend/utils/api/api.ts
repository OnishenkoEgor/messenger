import {SuccessResponseInterface} from "@/utils/types/api/type";
import axios from "axios";

const apiUrl: string = process.browser ? 'http://localhost:8282' : 'http://nginx:80';
const errorMessage: string = 'Unhandled network error.';

export const get = async <T>(pathname: string): Promise<SuccessResponseInterface<T>> => {
    return axios.get(apiUrl + pathname)
        .then(({data}): SuccessResponseInterface<T> => data satisfies SuccessResponseInterface<T>)
        .catch(({response}) => {
            throw new Error(response?.data?.message ?? errorMessage);
        });
}

export const post = async <T>(pathname: string, data: any): Promise<SuccessResponseInterface<T>> => {
    return axios.post(apiUrl + pathname, data)
        .then(({data}) => data satisfies SuccessResponseInterface<T>)
        .catch(({response}) => {
            throw new Error(response?.data?.message ?? errorMessage);
        });
}
