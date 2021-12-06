import {Exclude} from 'class-transformer';


export class UserEntity {
    id: number;
    online: boolean;
    avatarSrc: string;
    confirmed: boolean;
    username: string;
    email: string;
  
    @Exclude()
    password: string;
  
    constructor(partial: Partial<UserEntity>) {
      Object.assign(this, partial);
    }
}
