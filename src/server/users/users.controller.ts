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
} from '@nestjs/common';
import {UsersService} from './users.service';
import {
    editUserNameOpt, 
    editUserEmailOpt, 
    editUserPasswordOpt, 
    editUserOnlineOpt, 
    editUserAvatarOpt,
    UserResponse
} from './users.types';
import {UserEntity} from './user.entity';
import {LoggedInGuard} from '../auth/guard/logged-in.guard';
import {LocalAuthGuard} from '../auth/guard/local.guard';
import {CheckIdGuard} from './guard/check-id.guard';


@Controller('api/users')
export class UsersController {
    constructor(@Inject(UsersService) private readonly usersService: UsersService) {}
   
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
    public async getUserById(@Body('id') id: number): Promise<UserResponse | null> {
        const user = await this.usersService.getUserById(id);
        if(user) {
            return new UserEntity(user.get());
        }
        else {
            return null;
        }
    }

    @Get('byEmail')
    @UseGuards(LoggedInGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async getUserByEmail(@Body('email') email: string): Promise<UserResponse | null> {
        const user = await this.usersService.getUserByEmail(email);
        if(user) {
            return new UserEntity(user.get());
        }
        else {
            return null;
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
    public async editUserName(@Body() options: editUserNameOpt): Promise<void> {
        await this.usersService.editUserName(options)
    }

    @Put('editUserEmail')
    @UseGuards(LoggedInGuard)
    @UseGuards(CheckIdGuard)
    public async editUserEmail(@Body() options: editUserEmailOpt): Promise<void> {
        await this.usersService.editUserEmail(options)
    }

    @Put('editUserPassword')
    @UseGuards(LocalAuthGuard)
    @UseGuards(CheckIdGuard)
    public async editUserPassword(@Body() options: editUserPasswordOpt): Promise<void> {
        await this.usersService.editUserPassword(options)
    }

    @Put('editUserOnline')
    @UseGuards(LoggedInGuard)
    @UseGuards(CheckIdGuard)
    public async editUserOnline(@Body() options: editUserOnlineOpt): Promise<void> {
        await this.usersService.editUserOnline(options)
    }

    @Put('editUserAvatar')
    @UseGuards(LoggedInGuard)
    @UseGuards(CheckIdGuard)
    public async editUserAvatar(@Body() options: editUserAvatarOpt): Promise<void> {
        await this.usersService.editUserAvatar(options)
    }

    @Put('confirm')
    @UseGuards(LoggedInGuard)
    @UseGuards(CheckIdGuard)
    public async confirmUser(@Body('id') id: number): Promise<void> {
        await this.usersService.confirmUser(id)
    }

    @Delete()
    @UseGuards(LoggedInGuard)
    @UseGuards(CheckIdGuard)
    public async deleteUser(@Body('id') id: number): Promise<void> {
        await this.usersService.deleteUser(id);
    }
}
