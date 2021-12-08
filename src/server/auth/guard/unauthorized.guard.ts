import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';


@Injectable()
export class UnauthorizedInGuard implements CanActivate {
    public canActivate(context: ExecutionContext) {
        return !context.switchToHttp().getRequest().isAuthenticated();
    }
}