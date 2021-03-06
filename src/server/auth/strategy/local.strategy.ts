import {PassportStrategy} from '@nestjs/passport';
import {Strategy} from 'passport-local';
import {Injectable, Inject, UnauthorizedException} from '@nestjs/common';
import {AuthService} from '../provider/auth.service';
import {UserAuthData} from '../auth.types';



@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(@Inject(AuthService) private readonly authService: AuthService) {
        super({
            usernameField: 'email',
            passwordField: 'password'
        });
    }

    public async validate(email: string, password: string): Promise<UserAuthData> {
        const user = await this.authService.validateUser({email, password});

        if(user) {
            return user;
        }
        else {
            throw new UnauthorizedException();
        }
    }
}
