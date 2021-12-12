import {UserCreationAttrs} from '../../users/users.types';
import {ApiProperty} from '@nestjs/swagger';


export class  CreateUserDto implements UserCreationAttrs {
    @ApiProperty({description: 'Имя пользователя'})
    public readonly username: string;

    @ApiProperty({description: 'Email пользователя'})
    public readonly email: string;

    @ApiProperty({description: 'Пароль пользователя'})
    public readonly password: string;

    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}