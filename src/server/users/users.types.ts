export interface UserId {
    id: number;
}

export interface UserCreationAttrs {
    username: string;
    email: string;
    password: string;
}

export interface UserAttrs extends UserCreationAttrs, UserId {
    online: boolean;
    avatarSrc: string;
    confirmed: boolean;
}

export interface editUserNameOpt extends UserId {
    username: string;
}

export interface editUserEmailOpt extends UserId {
    email: string;
}

export interface editUserPasswordOpt extends UserId {
    password: string;
}

export interface editUserOnlineOpt extends UserId {
    online: boolean;
}

export interface editUserAvatarOpt extends UserId {
    avatarSrc: string;
}

export interface UserResponse {
    id: number;
    online: boolean;
    avatarSrc: string;
    confirmed: boolean;
    username: string;
    email: string;
}