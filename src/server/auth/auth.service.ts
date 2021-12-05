import {Injectable, Inject} from '@nestjs/common';
import bcrypt from 'bcrypt';
import {UsersService} from '../users/users.service';
import {LoginAttrs, UserAuthData} from './auth.types';


@Injectable()
export class AuthService {
    constructor(@Inject(UsersService) private readonly usersService: UsersService) {}

    public async validateUser({email, password}: LoginAttrs): Promise<UserAuthData | null> {
        const user = await this.usersService.getUserByEmail(email);
        console.log(user);

        if(!user) {
            return null
        }

        const isMatch: boolean = await bcrypt.compare(password, user.password);
        console.log(isMatch);

        if(isMatch) {
            const { password, ...result } = user.get();
            return result;
        }
        else {
            return null
        }
    }
}