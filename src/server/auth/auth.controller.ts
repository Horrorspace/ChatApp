import {Controller, Post, Request, UseGuards} from '@nestjs/common';
import {Request as Req} from 'express';
import {LocalAuthGuard} from './guard/local-auth.guard'


@Controller('auth')
export class AuthController {

    @Post('login')
    @UseGuards(LocalAuthGuard)
    public async login(@Request() req: Req) {
        return req.user;
    }
}