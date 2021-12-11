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
    HttpStatus
} from '@nestjs/common';
import {UsersService} from './users.service';
import {
    editUserNameOpt, 
    editUserEmailOpt, 
    editUserPasswordOpt, 
    editUserOnlineOpt, 
    editUserAvatarOpt,
} from './users.types';
import {UserEntity} from './user.entity';
import {LoggedInGuard} from '../auth/guard/logged-in.guard';
import {LocalAuthGuard} from '../auth/guard/local.guard';
import {CheckIdGuard} from './guard/check-id.guard';
import {ApiOperation, ApiResponse} from '@nestjs/swagger';


@Controller('api/users')
export class UsersController {
    constructor(@Inject(UsersService) private readonly usersService: UsersService) {}

    private readonly notFoundException: HttpException = new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'User not found'
    }, HttpStatus.NOT_FOUND);

    @ApiOperation({summary: 'Получение всех пользователей'})
    @ApiResponse({status: 200, description: 'Список пользователей получен'})
    @ApiResponse({status: 403, description: 'Доступ запрещен по причине отсутствующей авторизации'})
    @Get()
    @UseGuards(LoggedInGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async getAllUsers(): Promise<UserEntity[]> {
        const users = await this.usersService.getAllUsers();
        return users.map(user => {
            return new UserEntity(user.get());
        })
    }

    @Get('byId')
    @UseGuards(LoggedInGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async getUserById(@Body('id') id: number): Promise<UserEntity> {
        const user = await this.usersService.getUserById(id);
        if(user) {
            return new UserEntity(user.get());
        }
        else {
            throw this.notFoundException
        }
    }

    @Get('byEmail')
    @UseGuards(LoggedInGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async getUserByEmail(@Body('email') email: string): Promise<UserEntity> {
        const user = await this.usersService.getUserByEmail(email);
        if(user) {
            return new UserEntity(user.get());
        }
        else {
            throw this.notFoundException;
        }
    }

    @Get('checkId')
    @UseGuards(LoggedInGuard)
    public async checkUserId(@Body('id') id: number): Promise<boolean> {
        return await this.usersService.checkUserId(id);
    }

    @Get('checkEmail')
    @UseGuards(LoggedInGuard)
    public async checkUserEmail(@Body('email') email: string): Promise<boolean> {
        return await this.usersService.checkUserEmail(email);
    }

    @Put('editUserName')
    @UseGuards(LoggedInGuard)
    @UseGuards(CheckIdGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async editUserName(@Body() options: editUserNameOpt): Promise<UserEntity> {
        const isUserExist: boolean = await this.checkUserId(options.id);

        if(isUserExist) {
            const user = await this.usersService.editUserName(options);
            return new UserEntity(user!.get());
        }
        else {
            throw this.notFoundException;
        }
    }

    @Put('editUserEmail')
    @UseGuards(LocalAuthGuard)
    @UseGuards(CheckIdGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async editUserEmail(@Body() options: editUserEmailOpt): Promise<UserEntity> {
        const isUserExist: boolean = await this.checkUserId(options.id);

        if(isUserExist) {
            const user = await this.usersService.editUserEmail(options);
            return new UserEntity(user!.get());
        }
        else {
            throw this.notFoundException;
        }
    }

    @Put('editUserPassword')
    @UseGuards(LocalAuthGuard)
    @UseGuards(CheckIdGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async editUserPassword(@Body() options: editUserPasswordOpt): Promise<UserEntity> {
        const isUserExist: boolean = await this.checkUserId(options.id);

        if(isUserExist) {
            const user = await this.usersService.editUserPassword(options);
            return new UserEntity(user!.get());
        }
        else {
            throw this.notFoundException;
        }
    }

    @Put('editUserOnline')
    @UseGuards(LoggedInGuard)
    @UseGuards(CheckIdGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async editUserOnline(@Body() options: editUserOnlineOpt): Promise<UserEntity> {
        const isUserExist: boolean = await this.checkUserId(options.id);

        if(isUserExist) {
            const user = await this.usersService.editUserOnline(options);
            return new UserEntity(user!.get());
        }
        else {
            throw this.notFoundException;
        }
    }

    @Put('editUserAvatar')
    @UseGuards(LoggedInGuard)
    @UseGuards(CheckIdGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async editUserAvatar(@Body() options: editUserAvatarOpt): Promise<UserEntity> {
        const isUserExist: boolean = await this.checkUserId(options.id);

        if(isUserExist) {
            const user = await this.usersService.editUserAvatar(options);
            return new UserEntity(user!.get());
        }
        else {
            throw this.notFoundException;
        }
    }

    @Put('confirm')
    @UseGuards(LoggedInGuard)
    @UseGuards(CheckIdGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async confirmUser(@Body('id') id: number): Promise<UserEntity> {
        const isUserExist: boolean = await this.checkUserId(id);

        if(isUserExist) {
            const user = await this.usersService.confirmUser(id);
            return new UserEntity(user!.get());
        }
        else {
            throw this.notFoundException;
        }
    }

    @Delete()
    @UseGuards(LoggedInGuard)
    @UseGuards(CheckIdGuard)
    public async deleteUser(@Body('id') id: number): Promise<null> {
        const isUserExist: boolean = await this.checkUserId(id);

        if(isUserExist) {
            await this.usersService.deleteUser(id);
            return null;
        }
        else {
            throw this.notFoundException;
        }
    }
}