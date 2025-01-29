import {UserType} from "@/utils/api/user/type";
import axios from "axios";

const USER_API_URL = 'http://localhost:8282/user';

export async function getUser(id: number): Promise<UserType> {
    return axios.get(`${USER_API_URL}/get/${id}`);
}

export async function getAllUsers(): Promise<[]> {
    return axios.get(`${USER_API_URL}/get`);
}

export async function updateUser(userData: UserType): Promise<UserType> {
    return axios.post(`${USER_API_URL}/update`, userData);
}

export async function deleteUser(id: number): Promise<boolean> {
    return axios.get(`${USER_API_URL}/delete/${id}`);
}
