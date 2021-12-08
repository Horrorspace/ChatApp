import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';


@Injectable()
export class LoggedInGuard implements CanActivate {
    public canActivate(context: ExecutionContext) {
        return context.switchToHttp().getRequest().isAuthenticated();
    }
}