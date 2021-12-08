import {
    Controller, 
    Post, 
    Request, 
    UseGuards, 
    ClassSerializerInterceptor, 
    UseInterceptors, 
    Inject,
    Body,
    HttpException,
    HttpStatus
} from '@nestjs/common';
import {Request as Req} from 'express';
import {LocalAuthGuard} from './guard/local.guard';
import {LoggedInGuard} from './guard/logged-in.guard';
import {UnauthorizedGuard} from './guard/unauthorized.guard';
import {AuthService} from './provider/auth.service';
import {UserEntity} from '../users/user.entity';
import {UserAttrs, UserCreationAttrs} from 'server/users/users.types';


@Controller('auth')
export class AuthController {
    constructor(@Inject(AuthService) private readonly authService: AuthService) {}

    @Post('login')
    @UseGuards(LocalAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async login(@Request() req: Req): Promise<UserEntity> {
        return new UserEntity(req.user as UserAttrs);
    }

    @Post('logout')
    @UseGuards(LoggedInGuard)
    public async logout(@Request() req: Req): Promise<string> {
        req.logout();
        return 'You have been logouted';
    }

    @Post('register')
    @UseGuards(UnauthorizedGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async register(@Body() creationAttrs: UserCreationAttrs): Promise<UserEntity> {
        const user = await this.authService.registerUser(creationAttrs);

        if(user) {
            return new UserEntity(user.get());
        }
        else {
            throw new HttpException({
                status: HttpStatus.CONFLICT,
                error: 'User with this email already exist'
            },
            HttpStatus.CONFLICT)
        }
    }
}