import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';


@Injectable()
export class BasicAuthGuard extends AuthGuard('basic') implements CanActivate {
    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const result = (await super.canActivate(context)) as boolean;
        await super.logIn(context.switchToHttp().getRequest());
        return result;
    }
}