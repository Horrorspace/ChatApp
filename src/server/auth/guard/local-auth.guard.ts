import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';
import {Request as Req} from 'express';
// import {AuthGuard} from '@nestjs/passport';


@Injectable()
export class LocalAuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest<Req>();
        console.log(request.body);
        
        return false
    }
}