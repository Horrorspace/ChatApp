import {Model, Table, Column, DataType, PrimaryKey, Unique, BelongsTo, ForeignKey, Default, AutoIncrement} from 'sequelize-typescript';
import Sequelize from 'sequelize';
import {User} from '../users/users.model'

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
    @PrimaryKey
    @Unique
    @AutoIncrement
    @Column({type: DataType.INTEGER, allowNull: false})
    id!: number;
    
    @Default(Sequelize.NOW)
    @Column({type: DataType.DATE})
    date?: Date;
    
    @Default('')
    @Column({type: DataType.STRING})
    text!: string;
    
    @Default(false)
    @Column({type: DataType.BOOLEAN})
    readed?: boolean;
    
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    fromUserId!: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    toUserId!: number;

    @BelongsTo(() => User)
    user!: User;
}