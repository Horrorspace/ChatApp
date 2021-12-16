import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';


@Injectable()
export class LoggedInWsGuard implements CanActivate {
    public canActivate(context: ExecutionContext) {
        console.log(context.switchToWs().getClient());
        return true;
    }
}
