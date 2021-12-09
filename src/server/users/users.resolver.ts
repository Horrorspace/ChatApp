import {Inject} from '@nestjs/common';
import {Resolver, Query, Args} from '@nestjs/graphql';
import {UsersService} from './users.service';

@Resolver('User')
export class UsersResolver {
    constructor(@Inject(UsersService) private readonly usersService: UsersService) {}

    @Query()
    public async users() {
        return this.usersService.getAllUsers();
    }

    @Query()
    public async user(@Args('id') id: number) {
        return this.usersService.getUserById(id);
    }
}