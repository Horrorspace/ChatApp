import {Inject, UseGuards} from '@nestjs/common';
import {Resolver, Query, Args, Mutation} from '@nestjs/graphql';
import {UsersService} from './users.service';
import {GqlAuthGuard} from '../graphql/graphql-auth.guard';
// import {UsersGateway} from './users.gateway';
// import {CheckIdGuard} from './guard/check-id.guard';
import {
    editUserNameOpt, 
    editUserEmailOpt, 
    editUserPasswordOpt, 
    editUserOnlineOpt, 
    editUserAvatarOpt
} from './users.types';


@Resolver('User')
export class UsersResolver {
    constructor(@Inject(UsersService) private readonly usersService: UsersService) {}

    @Query()
    @UseGuards(GqlAuthGuard)
    public async users() {
        return this.usersService.getAllUsers();
    }

    @Query()
    @UseGuards(GqlAuthGuard)
    public async user(@Args('id') id: number) {
        return this.usersService.getUserById(id);
    }
    
    @Mutation()
    @UseGuards(GqlAuthGuard)
    public async editUserName(@Args('options') options: editUserNameOpt) {
        return await this.usersService.editUserName(options);
    }
    
    @Mutation()
    @UseGuards(GqlAuthGuard)
    public async editUserEmail(@Args('options') options: editUserEmailOpt) {
        return await this.usersService.editUserEmail(options);
    }
    
    @Mutation()
    @UseGuards(GqlAuthGuard)
    public async editUserPassword(@Args('options') options: editUserPasswordOpt) {
        return await this.usersService.editUserPassword(options);
    }
    
    @Mutation()
    @UseGuards(GqlAuthGuard)
    public async editUserOnline(@Args('options') options: editUserOnlineOpt) {
        return await this.usersService.editUserOnline(options);
    }
    
    @Mutation()
    @UseGuards(GqlAuthGuard)
    public async editUserAvatar(@Args('options') options: editUserAvatarOpt) {
        return await this.usersService.editUserAvatar(options);
    }
    
    @Mutation()
    @UseGuards(GqlAuthGuard)
    public async editUserConfirm(@Args('id') id: number) {
        return await this.usersService.confirmUser(id);
    }
}
