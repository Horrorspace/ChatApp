import {UserEmail} from '../users.types';
import {ApiProperty} from '@nestjs/swagger';


export class  UserEmailDto implements UserEmail {
    @ApiProperty({description: 'Email пользователя'})
    public readonly email: string;

    constructor(email: string) {
        this.email = email;
    }
}