export interface LoginAttrs {
    email: string;
    password: string;
}

export interface UserAuthData {
    id: number;
    online: boolean;
    avatarSrc: string;
    confirmed: boolean;
    username: string;
    email: string;
}

export interface AccessToken {
    access_token: string;
}

export interface JwtPayload {
    username: string;
    sub: number;
}
