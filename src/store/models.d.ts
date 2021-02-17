export interface User {
    name: string;
    email: string;
    password: string;
    cellPhone: string;
    scope: string;
    token: string;
}

export interface UserRegister {
    name: string;
    email: string;
    password: string;
    cellPhone: string;
    scope: string;
}

export interface UserSubmit {
    email: string;
    password: string;
}

export interface UserResponse {
    user: User;
}

export interface Message {
    message: string;
}
