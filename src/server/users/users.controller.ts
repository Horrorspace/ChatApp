import {Controller, Post, Body, Get, Put, Delete, Inject} from '@nestjs/common';
import {UsersService} from './users.service';
import {User} from './users.model';
import {
    UserCreationAttrs,
    editUserNameOpt, 
    editUserEmailOpt, 
    editUserPasswordOpt, 
    editUserOnlineOpt, 
    editUserAvatarOpt
} from './users.types';


@Controller('api/users')
export class UsersController {
    constructor(@Inject(UsersService) private usersService: UsersService) {}

    @Post()
    public async createUser(@Body() creationAttrs: UserCreationAttrs): Promise<User> {
        const user = await this.usersService.createUser(creationAttrs);
        return user;
    }

    @Get()
    public async getAllUsers(): Promise<User[]> {
        const users = await this.usersService.getAllUsers();
        return users;
    }

    @Get('byId')
    public async getUserById(@Body('id') id: number): Promise<User | null> {
        const user = await this.usersService.getUserById(id);
        return user;
    }

    @Get('byEmail')
    public async getUserByEmail(@Body('email') email: string): Promise<User | null> {
        const user = await this.usersService.getUserByEmail(email);
        return user;
    }

    @Get('checkId')
    public async checkUserId(@Body('id') id: number): Promise<boolean> {
        return await this.usersService.checkUserId(id);
    }

    @Get('checkEmail')
    public async checkUserEmail(@Body('email') email: string): Promise<boolean> {
        return await this.usersService.checkUserEmail(email);
    }

    @Put('editUserName')
    public async editUserName(@Body() options: editUserNameOpt): Promise<void> {
        await this.usersService.editUserName(options)
    }

    @Put('editUserEmail')
    public async editUserEmail(@Body() options: editUserEmailOpt): Promise<void> {
        await this.usersService.editUserEmail(options)
    }

    @Put('editUserPassword')
    public async editUserPassword(@Body() options: editUserPasswordOpt): Promise<void> {
        await this.usersService.editUserPassword(options)
    }

    @Put('editUserOnline')
    public async editUserOnline(@Body() options: editUserOnlineOpt): Promise<void> {
        await this.usersService.editUserOnline(options)
    }

    @Put('editUserAvatar')
    public async editUserAvatar(@Body() options: editUserAvatarOpt): Promise<void> {
        await this.usersService.editUserAvatar(options)
    }

    @Put('confirm')
    public async confirmUser(@Body('id') id: number): Promise<void> {
        await this.usersService.confirmUser(id)
    }

    @Delete()
    public async deleteUser(@Body('id') id: number): Promise<void> {
        await this.usersService.deleteUser(id);
    }
}