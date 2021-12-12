import {UserId} from '../users.types';
import {ApiProperty} from '@nestjs/swagger';


export class  UserIdDto implements UserId {
    @ApiProperty({description: 'Уникальный идентификатор пользователя'})
    public readonly id: number;

    constructor(id: number) {
        this.id = id;
    }
}