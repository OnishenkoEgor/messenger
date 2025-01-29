export interface AuthLoginType {
    email: string,
    password: string,
}

export interface AuthRegisterType extends AuthLoginType {
    name: string
}
