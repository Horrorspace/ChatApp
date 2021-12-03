import {Model, Table, Column, DataType} from 'sequelize-typescript';

interface MessageCreationAttrs {
    text: string;
    fromUserId: string;
    toUserId: string;
}

interface MessageAttrs extends MessageCreationAttrs {
    id: number;
    date: Date;
    readed: boolean;
}


@Table
export class Message extends Model<MessageAttrs, MessageCreationAttrs> {
    
    id!: number;
  
    date?: Date;
  
    text!: string;

    readed?: boolean;
    
    fromUserId!: string;

    toUserId!: string;
}
