import {MessageId} from '../messages.types';
import {ApiProperty} from '@nestjs/swagger';


export class  MessageIdDto implements MessageId {   
    @ApiProperty({description: 'Уникальный идентификатор сообщения'})
    public readonly id: number;

    constructor(id: number) {
        this.id = id;
    }
}