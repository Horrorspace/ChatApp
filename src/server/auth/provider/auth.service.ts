import {Injectable, Inject} from '@nestjs/common';
import bcrypt from 'bcrypt';
import {UserAttrs, UserCreationAttrs} from '../../users/users.types';
import {UsersService} from '../../users/users.service';
import {LoginAttrs, AccessToken, JwtPayload } from '../auth.types';
import {User} from '@server/users/users.model';
import {JwtService} from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        @Inject(UsersService) private readonly usersService: UsersService,
        @Inject(JwtService) private readonly jwtService: JwtService
    ) {}

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
    
    public async validateUserbyJwt({id}: JwtPayload): Promise<UserAttrs | null> {
        if(id) {
            const user = await this.usersService.getUserById(id);
            return user.get();
        }
        else {
            return null;
        }
    }
    
    public async getToken(userAttrs: UserAttrs): Promise<AccessToken | null> {
        const payload: JwtPayload  = {username: userAttrs.username, sub: userAttrs.id};
        return {
          accessToken: this.jwtService.sign(payload),
        };
    }
}
