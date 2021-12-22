import {UserDto} from '@core/dto/user.dto';
import {IUser} from '@interfaces/IUser';


export class User extends UserDto {
    constructor({
        id,
        online,
        avatarSrc,
        confirmed,
        username,
        email
    }: IUser) {
        super(
            id,
            online,
            avatarSrc,
            confirmed,
            username,
            email
        );
    }
  
    public getUser(): IUser {
        return {
            id: this.id,
            online: this.online,
            avatarSrc: this.avatarSrc,
            confirmed: this.confirmed,
            username: this.username,
            email: this.email
        }
    }
    
    public getId(): number {
        return this.id;
    }
  
    public setOnline(status: boolean): IMessage {
        this.online = status;
        return this.getUser();
    }
  
    public confirm(): IMessage {
        this.confirm = true;
        return this.getUser();
    }
}
