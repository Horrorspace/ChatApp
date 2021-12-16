import {Inject, UseGuards, UseInterceptors, ClassSerializerInterceptor} from '@nestjs/common';
import {Resolver, Query, Args, Mutation} from '@nestjs/graphql';
import {UsersService} from './users.service';
import {UserIdDto} from './dto/user-id.dto';
// import {UserEmailDto} from './dto/user-email.dto';
import {EditUserNameDto} from './dto/edit-user-name.dto';
import {EditUserEmailDto} from './dto/edit-user-email.dto';
// import {EditUserEmailAuthDto} from './dto/edit-user-email-auth.dto';
import {EditUserPasswordDto} from './dto/edit-user-password.dto';
// import {EditUserPasswordAuthDto} from './dto/edit-user-password-auth.dto';
import {EditUserOnlineDto} from './dto/edit-user-online.dto';
import {EditUserAvatarDto} from './dto/edit-user-avatar.dto';
import {UserEntity} from './user.entity';
import {GqlAuthGuard} from '../graphql/graphql-auth.guard';



@Resolver('User')
export class UsersResolver {
    constructor(@Inject(UsersService) private readonly usersService: UsersService) {}

    @Query()
    @UseGuards(GqlAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async users(): Promise<UserEntity[]> {
        const users = await this.usersService.getAllUsers();
        return users.map(user => {
            return new UserEntity(user.get());
        })
    }

    @Query()
    @UseGuards(GqlAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async user(@Args('options') {id}: UserIdDto): Promise<UserEntity | null> {
        const user = await this.usersService.getUserById(id);
        if(user) {
            return new UserEntity(user.get());
        }
        else {
            return null;
        }
    }
    
    @Mutation()
    @UseGuards(GqlAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async editUserName(@Args('options') options: EditUserNameDto): Promise<UserEntity | null> {
        const isUserExist: boolean = await this.usersService.checkUserId(options.id);

        if(isUserExist) {
            const user = await this.usersService.editUserName(options);
            return new UserEntity(user!.get());
        }
        else {
            return null;
        }
    }
    
    @Mutation()
    @UseGuards(GqlAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async editUserEmail(@Args('options') options: EditUserEmailDto): Promise<UserEntity | null> {
        const isUserExist: boolean = await this.usersService.checkUserId(options.id);

        if(isUserExist) {
            const user = await this.usersService.editUserEmail(options);
            return new UserEntity(user!.get());
        }
        else {
            return null;
        }
    }
    
    @Mutation()
    @UseGuards(GqlAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async editUserPassword(@Args('options') options: EditUserPasswordDto): Promise<UserEntity | null> {
        const isUserExist: boolean = await this.usersService.checkUserId(options.id);

        if(isUserExist) {
            const user = await this.usersService.editUserPassword(options);
            return new UserEntity(user!.get());
        }
        else {
            return null;
        }
    }
    
    @Mutation()
    @UseGuards(GqlAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async editUserOnline(@Args('options') options: EditUserOnlineDto): Promise<UserEntity | null> {
        const isUserExist: boolean = await this.usersService.checkUserId(options.id);

        if(isUserExist) {
            const user = await this.usersService.editUserOnline(options);
            return new UserEntity(user!.get());
        }
        else {
            return null;
        }
    }
    
    @Mutation()
    @UseGuards(GqlAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async editUserAvatar(@Args('options') options: EditUserAvatarDto): Promise<UserEntity | null> {
        const isUserExist: boolean = await this.usersService.checkUserId(options.id);

        if(isUserExist) {
            const user = await this.usersService.editUserAvatar(options);
            return new UserEntity(user!.get());
        }
        else {
            return null;
        }
    }
    
    @Mutation()
    @UseGuards(GqlAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async editUserConfirm(@Args('options') {id}: UserIdDto): Promise<UserEntity | null> {
        const isUserExist: boolean = await this.usersService.checkUserId(id);

        if(isUserExist) {
            const user = await this.usersService.confirmUser(id);
            return new UserEntity(user!.get());
        }
        else {
            return null;
        }
    }
}
