import {Exclude} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';


export class UserEntity {
    @ApiProperty({description: 'Уникальный идентификатор пользователя'})
    id!: number;

    @ApiProperty({description: 'Статус активности пользователя (онлайн / оффлайн)'})
    online!: boolean;

    @ApiProperty({description: 'Ссылка на аватар пользователя'})
    avatarSrc!: string;

    @ApiProperty({description: 'Статус учетной записи пользователя (подтверждена / не подтверждена)'})
    confirmed!: boolean;

    @ApiProperty({description: 'Имя пользователя'})
    username!: string;

    @ApiProperty({description: 'Email идентификатор пользователя'})
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
