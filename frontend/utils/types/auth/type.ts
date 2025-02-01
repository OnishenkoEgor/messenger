export interface AuthLoginInterface {
    email: string,
    password: string,
}

export interface AuthRegisterInterface extends AuthLoginInterface {
    name: string
}

export const AUTH_TOKEN_COOKIE: string = 'auth_token';
export const AUTH_USER_COOKIE: string = 'user_data';
