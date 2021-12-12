import {ApiProperty} from '@nestjs/swagger';
import {editUserPasswordAllAttrs} from '../users.types';
import {EditUserPasswordDto} from '../dto/edit-user-password.dto';


export class EditUserPasswordAuthDto extends EditUserPasswordDto implements editUserPasswordAllAttrs {
    @ApiProperty({description: 'Email пользователя'})
    public readonly email: string;

    @ApiProperty({description: 'Пароль пользователя'})
    public readonly password: string;

    constructor(email: string, password: string, id: number, newPassword: string) {
        super(id, newPassword);
        this.email = email;
        this.password = password;
    }
}