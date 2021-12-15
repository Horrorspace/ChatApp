import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';



@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
    public async canActivate(context: ExecutionContext): Promise<boolean> {
        console.log(context);
        const result = (await super.canActivate(context)) as boolean;
        return result;
    }
}
