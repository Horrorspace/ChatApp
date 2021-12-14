import {Injectable, Inject} from '@nestjs/common';
import bcrypt from 'bcrypt';
import {UserAttrs, UserCreationAttrs} from '../../users/users.types';
import {UsersService} from '../../users/users.service';
import {LoginAttrs} from '../auth.types';
import {User} from '@server/users/users.model';


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

    public async registerUser(creationAttrs: UserCreationAttrs): Promise<User | null> {
        const user = await this.usersService.createUser(creationAttrs);
        return user;
    }
    
    public async validateUserbyJwt({id}): Promise<UserAttrs | null> {
        if(id) {
            const user = await this.usersService.getUserById(id);
            return user.get();
        }
        else {
            return null;
        }
    }
}
