import {Controller, Post, Request, UseGuards} from '@nestjs/common';
import {Request as Req} from 'express';
import {AuthGuard} from '@nestjs/passport';
// import {LocalAuthGuard} from './guard/local-auth.guard'
// import {User} from '../users/users.model';
// import {AuthService} from './auth.service';
// import {LoginAttrs} from './auth.types'


@Controller('auth')
export class AuthController {
    // constructor(@Inject(AuthService) private readonly authService: AuthService) {}

    @Post('login')
    @UseGuards(AuthGuard('local'))
    public async login(@Request() req: Req) {
        return req.user;
    }
}