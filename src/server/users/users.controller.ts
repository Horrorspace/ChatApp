import {
    Controller, 
    Body, 
    Get, 
    Put, 
    Delete, 
    Inject, 
    UseInterceptors, 
    ClassSerializerInterceptor, 
    UseGuards,
    HttpException,
    HttpStatus,
    Request
} from '@nestjs/common';
import {Request as Req} from 'express';
import {UsersService} from './users.service';
import {UserIdDto} from './dto/user-id.dto';
import {UserEmailDto} from './dto/user-email.dto';
import {EditUserNameDto} from './dto/edit-user-name.dto';
import {EditUserEmailDto} from './dto/edit-user-email.dto';
import {EditUserEmailAuthDto} from './dto/edit-user-email-auth.dto';
import {EditUserPasswordDto} from './dto/edit-user-password.dto';
import {EditUserPasswordAuthDto} from './dto/edit-user-password-auth.dto';
import {EditUserOnlineDto} from './dto/edit-user-online.dto';
import {EditUserAvatarDto} from './dto/edit-user-avatar.dto';
import {UserEntity} from './user.entity';
import {LoggedInGuard} from '../auth/guard/logged-in.guard';
import {LocalAuthGuard} from '../auth/guard/local.guard';
import {CheckIdGuard} from './guard/check-id.guard';
import {
    ApiOperation, 
    ApiOkResponse,
    ApiForbiddenResponse, 
    ApiTags,
    ApiBody,
    ApiBasicAuth,
    ApiNotFoundResponse
} from '@nestjs/swagger';

@ApiBasicAuth()
@Controller('api/users')
export class UsersController {
    constructor(@Inject(UsersService) private readonly usersService: UsersService) {}

    private readonly notFoundException: HttpException = new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'User not found'
    }, HttpStatus.NOT_FOUND);


    @ApiTags('Users')
    @ApiOperation({summary: 'Получение всех пользователей'})
    @ApiOkResponse({
        description: 'Список пользователей получен',
        type: [UserEntity]
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен по причине отсутствующей авторизации'})
    @Get()
    @UseGuards(LoggedInGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async getAllUsers(): Promise<UserEntity[]> {
        const users = await this.usersService.getAllUsers();
        return users.map(user => {
            return new UserEntity(user.get());
        })
    }

    @ApiTags('Users')
    @ApiOperation({summary: 'Получение пользователя по id'})
    @ApiOkResponse({
        description: 'Пользователь получен',
        type: UserEntity
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен по причине отсутствующей авторизации'})
    @ApiNotFoundResponse({description: 'Пользователь не найден'})
    @Get('byId')
    @UseGuards(LoggedInGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async getUserById(@Body() {id}: UserIdDto): Promise<UserEntity> {
        const user = await this.usersService.getUserById(id);
        if(user) {
            return new UserEntity(user.get());
        }
        else {
            throw this.notFoundException
        }
    }

    @ApiTags('Users')
    @ApiOperation({summary: 'Получение пользователя по email'})
    @ApiOkResponse({
        description: 'Пользователь получен',
        type: UserEntity
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен по причине отсутствующей авторизации'})
    @ApiNotFoundResponse({description: 'Пользователь не найден'})
    @Get('byEmail')
    @UseGuards(LoggedInGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async getUserByEmail(@Body() {email}: UserEmailDto): Promise<UserEntity> {
        const user = await this.usersService.getUserByEmail(email);
        if(user) {
            return new UserEntity(user.get());
        }
        else {
            throw this.notFoundException;
        }
    }

    @ApiTags('Users')
    @ApiOperation({summary: 'Проверка существования пользователя по id'})
    @ApiOkResponse({
        description: 'Ответ получен',
        type: Boolean
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен по причине отсутствующей авторизации'})
    @Get('checkId')
    @UseGuards(LoggedInGuard)
    public async checkUserId(@Body() {id}: UserIdDto): Promise<boolean> {
        return await this.usersService.checkUserId(id);
    }

    @ApiTags('Users')
    @ApiOperation({summary: 'Проверка существования пользователя по email'})
    @ApiOkResponse({
        description: 'Ответ получен',
        type: Boolean
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен по причине отсутствующей авторизации'})
    @Get('checkEmail')
    @UseGuards(LoggedInGuard)
    public async checkUserEmail(@Body() {email}: UserEmailDto): Promise<boolean> {
        return await this.usersService.checkUserEmail(email);
    }

    @ApiTags('Users')
    @ApiOperation({summary: 'Изменение имени пользователя'})
    @ApiOkResponse({
        description: 'Имя пользователя изменено',
        type: UserEntity
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен по причине отсутствующей авторизации'})
    @ApiNotFoundResponse({description: 'Пользователь не найден'})
    @Put('editUserName')
    @UseGuards(LoggedInGuard)
    @UseGuards(CheckIdGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async editUserName(@Body() options: EditUserNameDto): Promise<UserEntity> {
        const isUserExist: boolean = await this.usersService.checkUserId(options.id);

        if(isUserExist) {
            const user = await this.usersService.editUserName(options);
            return new UserEntity(user!.get());
        }
        else {
            throw this.notFoundException;
        }
    }

    @ApiTags('Users')
    @ApiOperation({summary: 'Изменение email пользователя'})
    @ApiOkResponse({
        description: 'Email пользователя изменен',
        type: UserEntity
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен по причине отсутствующей авторизации'})
    @ApiNotFoundResponse({description: 'Пользователь не найден'})
    @ApiBody({type: EditUserEmailAuthDto})
    @Put('editUserEmail')
    @UseGuards(LocalAuthGuard)
    @UseGuards(CheckIdGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async editUserEmail(@Body() options: EditUserEmailDto): Promise<UserEntity> {
        const isUserExist: boolean = await this.usersService.checkUserId(options.id);

        if(isUserExist) {
            const user = await this.usersService.editUserEmail(options);
            return new UserEntity(user!.get());
        }
        else {
            throw this.notFoundException;
        }
    }

    @ApiTags('Users')
    @ApiOperation({summary: 'Изменение пароля пользователя'})
    @ApiOkResponse({
        description: 'Пароль пользователя изменен',
        type: UserEntity
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен по причине отсутствующей авторизации'})
    @ApiNotFoundResponse({description: 'Пользователь не найден'})
    @ApiBody({type: EditUserPasswordAuthDto})
    @Put('editUserPassword')
    @UseGuards(LocalAuthGuard)
    @UseGuards(CheckIdGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async editUserPassword(@Body() options: EditUserPasswordDto): Promise<UserEntity> {
        const isUserExist: boolean = await this.usersService.checkUserId(options.id);

        if(isUserExist) {
            const user = await this.usersService.editUserPassword(options);
            return new UserEntity(user!.get());
        }
        else {
            throw this.notFoundException;
        }
    }

    @ApiTags('Users')
    @ApiOperation({summary: 'Изменение статуса пользователя'})
    @ApiOkResponse({
        description: 'Статус пользователя изменен',
        type: UserEntity
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен по причине отсутствующей авторизации'})
    @ApiNotFoundResponse({description: 'Пользователь не найден'})
    @Put('editUserOnline')
    @UseGuards(LoggedInGuard)
    @UseGuards(CheckIdGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async editUserOnline(@Body() options: EditUserOnlineDto): Promise<UserEntity> {
        const isUserExist: boolean = await this.usersService.checkUserId(options.id);

        if(isUserExist) {
            const user = await this.usersService.editUserOnline(options);
            return new UserEntity(user!.get());
        }
        else {
            throw this.notFoundException;
        }
    }

    @ApiTags('Users')
    @ApiOperation({summary: 'Изменение аватара пользователя'})
    @ApiOkResponse({
        description: 'Аватар пользователя изменен',
        type: UserEntity
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен по причине отсутствующей авторизации'})
    @ApiNotFoundResponse({description: 'Пользователь не найден'})
    @Put('editUserAvatar')
    @UseGuards(LoggedInGuard)
    @UseGuards(CheckIdGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async editUserAvatar(@Body() options: EditUserAvatarDto): Promise<UserEntity> {
        const isUserExist: boolean = await this.usersService.checkUserId(options.id);

        if(isUserExist) {
            const user = await this.usersService.editUserAvatar(options);
            return new UserEntity(user!.get());
        }
        else {
            throw this.notFoundException;
        }
    }

    @ApiTags('Users')
    @ApiOperation({summary: 'Подтверждение email пользователя'})
    @ApiOkResponse({
        description: 'Email пользователя подтвержден',
        type: UserEntity
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен по причине отсутствующей авторизации'})
    @ApiNotFoundResponse({description: 'Пользователь не найден'})
    @Put('confirm')
    @UseGuards(LoggedInGuard)
    @UseGuards(CheckIdGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async confirmUser(@Body() {id}: UserIdDto): Promise<UserEntity> {
        const isUserExist: boolean = await this.usersService.checkUserId(id);

        if(isUserExist) {
            const user = await this.usersService.confirmUser(id);
            return new UserEntity(user!.get());
        }
        else {
            throw this.notFoundException;
        }
    }

    @ApiTags('Users')
    @ApiOperation({summary: 'Удаление пользователя'})
    @ApiOkResponse({
        description: 'Пользователь удален',
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен по причине отсутствующей авторизации'})
    @ApiNotFoundResponse({description: 'Пользователь не найден'})
    @Delete('byId')
    @UseGuards(LoggedInGuard)
    @UseGuards(CheckIdGuard)
    public async deleteUser(@Request() req: Req, @Body() {id}: UserIdDto): Promise<null> {
        const isUserExist: boolean = await this.usersService.checkUserId(id);

        if(isUserExist) {
            req.logout();
            await this.usersService.deleteUser(id);
            return null;
        }
        else {
            throw this.notFoundException;
        }
    }
}