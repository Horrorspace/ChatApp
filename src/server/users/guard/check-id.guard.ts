import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';
import {User} from '../users.model';
import {Request as Req} from 'express';


@Injectable()
export class CheckIdGuard implements CanActivate {
    public canActivate(context: ExecutionContext) {
        const req: Req = context.switchToHttp().getRequest();
        const user = req.user as User | undefined;
        const id = req.body.id as number;

        if(user && id) {
            return user.id === id
        }
        else {
            return false
        }
    }
}