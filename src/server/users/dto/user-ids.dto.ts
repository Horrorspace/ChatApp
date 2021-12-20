import {UserIds} from '../users.types';
import {ApiProperty} from '@nestjs/swagger';


export class  UserIdsDto implements UserIds {
    @ApiProperty({description: 'Массив уникальных идентификаторов пользователей'})
    public readonly ids: number[];

    constructor(ids: number[]) {
        this.ids = ids;
    }
}
