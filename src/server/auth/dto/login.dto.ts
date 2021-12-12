import {LoginAttrs} from '../auth.types';
import {ApiProperty} from '@nestjs/swagger';


export class  LoginDto implements LoginAttrs {
    @ApiProperty({description: 'Email пользователя'})
    public readonly email: string;

    @ApiProperty({description: 'Пароль пользователя'})
    public readonly password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}