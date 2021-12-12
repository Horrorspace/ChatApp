import {editUserEmailOpt} from '../users.types';
import {ApiProperty} from '@nestjs/swagger';
import {UserIdDto} from './user-id.dto';


export class  EditUserEmailDto extends UserIdDto implements editUserEmailOpt {
    @ApiProperty({description: 'Новый email пользователя'})
    public readonly newEmail: string;

    constructor(id: number, newEmail: string) {
        super(id);
        this.newEmail = newEmail;
    }
}