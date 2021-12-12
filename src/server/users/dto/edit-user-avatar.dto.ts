import {editUserAvatarOpt} from '../users.types';
import {ApiProperty} from '@nestjs/swagger';
import {UserIdDto} from './user-id.dto';


export class  EditUserAvatarDto extends UserIdDto implements editUserAvatarOpt {
    @ApiProperty({description: 'Ссылка на аватар пользователя'})
    public readonly avatarSrc: string;

    constructor(id: number, avatarSrc: string) {
        super(id);
        this.avatarSrc = avatarSrc;
    }
}