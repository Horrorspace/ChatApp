import {PassportStrategy} from '@nestjs/passport';
import {Strategy, ExtractJwt} from 'passport-jwt';
import {Injectable, Inject, UnauthorizedException} from '@nestjs/common';
import {AuthService} from '../provider/auth.service';
import {UserAuthData} from '../auth.types';



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(@Inject(AuthService) private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET_KEY,
        });
    }

    public async validate(payload): Promise<UserAuthData> {
        const user = await this.authService.validateUserbyJwt(payload);

        if(user) {
            return user;
        }
        else {
            throw new UnauthorizedException();
        }
    }
}
