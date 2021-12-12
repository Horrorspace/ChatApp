import {Exclude} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';


export class UserEntity {
    @ApiProperty()
    id!: number;

    @ApiProperty()
    online!: boolean;

    @ApiProperty()
    avatarSrc!: string;

    @ApiProperty()
    confirmed!: boolean;

    @ApiProperty()
    username!: string;

    @ApiProperty()
    email!: string;

  
    @Exclude()
    password!: string;
    @Exclude()
    createdAt!: Date;
    @Exclude()
    updatedAt!: Date;
  
    constructor(partial: Partial<UserEntity>) {
      Object.assign(this, partial);
    }
}
