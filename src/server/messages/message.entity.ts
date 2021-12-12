import {Exclude} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';


export class MessageEntity {
    @ApiProperty({description: 'Уникальный идентификатор сообщения'})
    id!: number;
    
    @ApiProperty({description: 'Дата создания сообщения'})
    date?: Date;
    
    @ApiProperty({description: 'Текст сообщения'})
    text!: string;
    
    @ApiProperty({description: 'Статус сообщения (прочитано / не прочитано)'})
    readed?: boolean;
    
    @ApiProperty({description: 'Уникальный идентификатор отправителя сообщения'})
    fromUserId!: number;

    @ApiProperty({description: 'Уникальный идентификатор получателя сообщения'})
    toUserId!: number;

  
    @Exclude()
    createdAt!: Date;
    @Exclude()
    updatedAt!: Date;
  
    constructor(partial: Partial<MessageEntity>) {
      Object.assign(this, partial);
    }
}
