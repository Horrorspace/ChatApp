import {Injectable, Inject, CanActivate, ExecutionContext} from '@nestjs/common';
import {AccessToken} from '../auth.types';
import {JwtService} from '@nestjs/jwt';


@Injectable()
export class LoggedInWsGuard implements CanActivate {   
    constructor(@Inject(JwtService) private readonly jwtService: JwtService) {}
    
    public async canActivate(context: ExecutionContext) {
        const body = context.switchToWs().getData();

        if('access_token' in body) {
            try {
                const {access_token} = body as AccessToken;
                await this.jwtService.verify(access_token);
                return true;
            }
            catch(e) {
                console.error(e);
                return false
            }
        }
        else {
            return false;
        }
    }
}
