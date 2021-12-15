import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';


@Injectable()
export class LoggedInWsGuard implements CanActivate {
    public canActivate(context: ExecutionContext) {
        context.switchToWs().getClient();
        return context.switchToHttp().getRequest().isAuthenticated();
    }
}