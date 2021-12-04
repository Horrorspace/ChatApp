import {UserCreationAttrs} from '../users.types';

export class  CreateUserDto implements UserCreationAttrs {
    public readonly username: string;
    public readonly email: string;
    public readonly password: string;

    constructor({username, email, password}: UserCreationAttrs) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}