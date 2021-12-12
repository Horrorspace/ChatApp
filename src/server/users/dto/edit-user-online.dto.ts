import {editUserOnlineOpt} from '../users.types';
import {ApiProperty} from '@nestjs/swagger';
import {UserIdDto} from './user-id.dto';


export class  EditUserOnlineDto extends UserIdDto implements editUserOnlineOpt {
    @ApiProperty({description: 'Статус пользователя'})
    public readonly online: boolean;

    constructor(id: number, online: boolean) {
        super(id);
        this.online = online;
    }
}