import {Model, Table, Column, DataType, PrimaryKey, Unique, Default, AutoIncrement} from 'sequelize-typescript';
import {UserAttrs, UserCreationAttrs} from './users.types';


@Table
export class User extends Model<UserAttrs, UserCreationAttrs> {
    @PrimaryKey
    @Unique
    @AutoIncrement
    @Column({type: DataType.INTEGER, allowNull: false})
    id?: number;

    @Column({type: DataType.STRING, allowNull: false})
    username!: string;

    @Unique
    @Column({type: DataType.STRING, allowNull: false})
    email!: string;

    @Column({type: DataType.STRING, allowNull: false})
    password!: string;

    @Default(false)
    @Column({type: DataType.BOOLEAN})
    online?: boolean;

    @Default('')
    @Column({type: DataType.STRING})
    avatarSrc?: string;

    @Default(false)
    @Column({type: DataType.BOOLEAN})
    confirmed?: boolean;
}
