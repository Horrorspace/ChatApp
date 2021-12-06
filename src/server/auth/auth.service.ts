import {Injectable, Inject} from '@nestjs/common';
import bcrypt from 'bcrypt';
import {UserAttrs} from 'server/users/users.types';
import {UsersService} from '../users/users.service';
import {LoginAttrs} from './auth.types';


@Injectable()
export class AuthService {
    constructor(@Inject(UsersService) private readonly usersService: UsersService) {}

    public async validateUser({email, password}: LoginAttrs): Promise<UserAttrs | null> {
        const user = await this.usersService.getUserByEmail(email);

        if(!user) {
            return null
        }

        const isMatch: boolean = await bcrypt.compare(password, user.password);

        if(isMatch) {
            return user.get();
        }
        else {
            return null
        }
    }
}