import {IUser} from '@interfaces/IUser';


export class UserDto implements IUser {
    public readonly id: number;
    public readonly online: boolean;
    public readonly avatarSrc: string;
    public readonly confirmed: boolean;
    public readonly username: string;
    public readonly email: string;

    constructor(
        id: number,
        online: boolean,
        avatarSrc: string,
        confirmed: boolean,
        username: string,
        email: string
    ) {
        this.id = id;
        this.online = online;
        this.avatarSrc = avatarSrc;
        this.confirmed = confirmed;
        this.username = username;
        this.email = email;
    }
}