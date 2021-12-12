import {MessageCreationAttrs} from '../messages.types';
import {ApiProperty} from '@nestjs/swagger';


export class  CreateMessageDto implements MessageCreationAttrs {
    public readonly fromUserId: number;
    
    @ApiProperty({description: 'Уникальный идентификатор получателя'})
    public readonly toUserId: number;

    @ApiProperty({description: 'Текст сообщения'})
    public readonly text: string;

    constructor(fromUserId: number, toUserId: number, text: string) {
        this.fromUserId = fromUserId;
        this.toUserId = toUserId;
        this.text = text;
    }
}