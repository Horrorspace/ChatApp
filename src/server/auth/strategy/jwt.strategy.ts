import {PassportStrategy} from '@nestjs/passport';
import {Strategy, ExtractJwt} from 'passport-jwt';
import {Injectable, Inject, UnauthorizedException} from '@nestjs/common';
import {AuthService} from '../provider/auth.service';
import {UserAuthData, JwtPayload} from '../auth.types';
import {jwtSecret} from '../const/jwt.const'



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {   
    constructor(@Inject(AuthService) private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: jwtSecret,
        });
    }

    public async validate(payload: JwtPayload): Promise<UserAuthData> {
        const user = await this.authService.validateUserbyJwt(payload);

        if(user) {
            return user;
        }
        else {
            throw new UnauthorizedException();
        }
    }
}
