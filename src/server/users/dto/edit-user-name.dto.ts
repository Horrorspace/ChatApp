import {editUserNameOpt} from '../users.types';
import {ApiProperty} from '@nestjs/swagger';
import {UserIdDto} from './user-id.dto';


export class  EditUserNameDto extends UserIdDto implements editUserNameOpt {
    @ApiProperty({description: 'Новое имя пользователя'})
    public readonly username: string;

    constructor(id: number, username: string) {
        super(id);
        this.username = username;
    }
}