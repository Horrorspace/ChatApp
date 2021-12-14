import {AccessToken} from '../auth.types';
import {ApiProperty} from '@nestjs/swagger';


export class  TokenDto implements AccessToken {
    @ApiProperty({description: 'JWT-токен'})
    public readonly access_token: string;

    constructor(access_token: string) {
        this.access_token = access_token;
    }
}