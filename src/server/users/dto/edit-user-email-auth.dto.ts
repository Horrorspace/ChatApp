import {ApiProperty} from '@nestjs/swagger';
import {editUserEmailAllAttrs} from '../users.types';
import {EditUserEmailDto} from '../dto/edit-user-email.dto';


export class EditUserEmailAuthDto extends EditUserEmailDto implements editUserEmailAllAttrs {
    @ApiProperty({description: 'Email пользователя'})
    public readonly email: string;

    @ApiProperty({description: 'Пароль пользователя'})
    public readonly password: string;

    constructor(email: string, password: string, id: number, newEmail: string) {
        super(id, newEmail);
        this.email = email;
        this.password = password;
    }
}