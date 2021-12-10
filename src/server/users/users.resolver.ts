import {Inject} from '@nestjs/common';
import {Resolver, Query, Args, Mutation} from '@nestjs/graphql';
import {UsersService} from './users.service';
import {LoggedInGuard} from '../auth/guard/logged-in.guard';
import {CheckIdGuard} from './guard/check-id.guard';
import {
    editUserNameOpt, 
} from './users.types';


@Resolver('User')
export class UsersResolver {
    constructor(@Inject(UsersService) private readonly usersService: UsersService) {}

    @Query()
    @UseGuards(LoggedInGuard)
    public async users() {
        return this.usersService.getAllUsers();
    }

    @Query()
    @UseGuards(LoggedInGuard)
    public async user(@Args('id') id: number) {
        return this.usersService.getUserById(id);
    }
    
    @Mutation()
    @UseGuards(LoggedInGuard)
    @UseGuards(CheckIdGuard)
    public async editUserName(@Args({options: EditUserName}) options: editUserNameOpt) {
        await this.usersService.editUserName(options);
    }
}
