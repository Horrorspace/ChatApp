import {Model, Table, Column, DataType} from 'sequelize-typescript';
import Sequelize from 'sequelize';

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
    @Column({type: DataType.INTEGER, allowNull: false, unique: true, primaryKey: true, autoIncrement: true})
    id!: number;
    
    @Column({type: DataType.DATE, defaultValue: Sequelize.NOW})
    date?: Date;
    
    @Column({type: DataType.STRING}, defaultValue: '')
    text!: string;
    
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    readed?: boolean;
    
    @BelongsTo(() => User, () => id)
    fromUserId!: string;

    @BelongsTo(() => User, () => id)
    toUserId!: string;
}
