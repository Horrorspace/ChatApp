import {Controller, Post, Request, UseGuards, ClassSerializerInterceptor, UseInterceptors} from '@nestjs/common';

import {Request as Req} from 'express';
import {LocalAuthGuard} from './guard/local.guard';
import {UserEntity} from '../users/user.entity';
import { UserAttrs } from 'server/users/users.types';


@Controller('auth')
export class AuthController {

    @Post('login')
    @UseGuards(LocalAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async login(
        @Request() req: Req,
    ) {
        return new UserEntity(req.user as UserAttrs);
    }
}