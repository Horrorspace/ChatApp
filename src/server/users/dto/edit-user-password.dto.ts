import {editUserPasswordOpt} from '../users.types';
import {ApiProperty} from '@nestjs/swagger';
import {UserIdDto} from './user-id.dto';


export class  EditUserPasswordDto extends UserIdDto implements editUserPasswordOpt {
    @ApiProperty({description: 'Новый пароль пользователя'})
    public readonly newPassword: string;

    constructor(id: number, newPassword: string) {
        super(id);
        this.newPassword = newPassword;
    }
}