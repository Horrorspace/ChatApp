import {
    Controller, 
    Post, 
    Request, 
    UseGuards, 
    ClassSerializerInterceptor, 
    UseInterceptors, 
    Inject,
    Body,
    Get,
    HttpException,
    HttpStatus,
    HttpCode
} from '@nestjs/common';
import {
    ApiOperation, 
    ApiOkResponse,
    ApiForbiddenResponse,
    ApiConflictResponse,
    ApiTags,
    ApiBody,
    ApiBasicAuth,
} from '@nestjs/swagger';
import {Request as Req} from 'express';
import {LocalAuthGuard} from './guard/local.guard';
import {LoggedInGuard} from './guard/logged-in.guard';
import {JwtAuthGuard} from './guard/jwt.guard';
import {UnauthorizedGuard} from './guard/unauthorized.guard';
import {LoginDto} from './dto/login.dto';
import {CreateUserDto} from './dto/create-user.dto';
import {TokenDto} from './dto/token.dto';
import {AuthService} from './provider/auth.service';
import {UserEntity} from '../users/user.entity';
import {UserAttrs} from 'server/users/users.types';


@Controller('auth')
export class AuthController {
    constructor(@Inject(AuthService) private readonly authService: AuthService) {}

    @ApiTags('Auth')
    @ApiOperation({summary: 'Вход в аккаунт'})
    @ApiOkResponse({
        description: 'Вход в аккаунт выполнен успешно',
        type: UserEntity
    })
    @ApiForbiddenResponse({description: 'Вход в аккаунт невозможен, пользователь с таким email и паролем не существует'})
    @ApiBody({type: LoginDto})
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async login(@Request() req: Req): Promise<UserEntity> {
        return new UserEntity(req.user as UserAttrs);
    }

    @ApiTags('Auth')
    @ApiOperation({summary: 'Выход из аккаунта'})
    @ApiOkResponse({
        description: 'Выход из аккаунта выполнен успешно',
        type: String
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен по причине отсутствующей авторизации'})
    @ApiBasicAuth()
    @Post('logout')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LoggedInGuard)
    public async logout(@Request() req: Req): Promise<string> {
        req.logout();
        return 'You have been logouted';
    }

    @ApiTags('Auth')
    @ApiOperation({summary: 'Регистрация пользователя'})
    @ApiOkResponse({
        description: 'Регистрация выполнена успешно',
        type: UserEntity
    })
    @ApiForbiddenResponse({description: 'Вход уже выполнен под другим email'})
    @ApiConflictResponse({description: 'Пользователь с таким email уже существует'})
    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    @UseGuards(UnauthorizedGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async register(@Body() creationAttrs: CreateUserDto): Promise<UserEntity> {
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
    
    @ApiTags('Auth')
    @ApiOperation({summary: 'Получение JWT-токена'})
    @ApiOkResponse({
        description: 'Токен получен',
        type: TokenDto
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен'})
    @Get('getToken')
    @UseGuards(LoggedInGuard)
    public async getToken(@Request() req: Req): Promise<TokenDto | null> {
        const userAttrs = req.user as UserAttrs;
        const res = await this.authService.getToken(userAttrs);
        return res;
    }

    @ApiTags('Auth')
    @ApiOperation({summary: 'Получение текущего пользователя'})
    @ApiOkResponse({
        description: 'Пользователь получен',
        type: UserEntity
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен по причине отсутствующей авторизации'})
    @Get('getUser')
    @UseGuards(LoggedInGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async getUser(@Request() req: Req): Promise<UserEntity | null> {
        const userAttrs = req.user as UserAttrs;
        const id: number | null = userAttrs.id;

        if(id) {
            const user = await this.authService.getUser(id);
            return user ? new UserEntity(user.get()) : null;
        }
        else {
            return null;
        }
    }

    @Post('jwtTest')
    @UseGuards(JwtAuthGuard)
    public async jwtAuthTest(@Request() req: Req): Promise<string> {
        console.log(req.user)
        return 'test';
    }
}
