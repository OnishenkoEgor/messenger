export interface AuthLoginType {
    email: string,
    password: string,
}

export interface AuthRegisterType extends AuthLoginType {
    inviteKey: string
}
