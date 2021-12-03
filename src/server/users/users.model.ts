import {Model, Table, Column, DataType} from 'sequelize-typescript';

interface UserCreationAttrs {
    username: string;
    email: string;
    password: string;
}

interface UserAttrs extends UserCreationAttrs {
    id: number;
    online: boolean;
    avatar_src: string;
    confirmed: boolean;
}


@Table
export class User extends Model<UserAttrs, UserCreationAttrs> {
    @Column({type: DataType.INTEGER, allowNull: false, unique: true, primaryKey: true, autoIncrement: true})
    id!: number;

    @Column({type: DataType.STRING, allowNull: false})
    username!: string;

    @Column({type: DataType.STRING, allowNull: false, unique: true})
    email!: string;

    @Column({type: DataType.STRING, allowNull: false})
    password!: string;

    @Column({type: DataType.BOOLEAN, defaultValue: true})
    online?: boolean;

    @Column({type: DataType.STRING, defaultValue: ''})
    avatar_src?: string;

    @Column({type: DataType.BOOLEAN, defaultValue: true})
    confirmed?: boolean;
}
