import {Injectable, CanActivate, ExecutionContext, Inject} from '@nestjs/common';
// import {headersObj, ReqObj} from '../auth/auth.types';
import {Request as Req} from 'express';
import {GqlExecutionContext} from '@nestjs/graphql';
import {IncomingHttpHeaders} from 'http';
import {JwtService} from '@nestjs/jwt';


@Injectable()
export class GqlAuthGuard implements CanActivate {
    constructor(@Inject(JwtService) private readonly jwtService: JwtService) {}
    
    private getHeaders(context: ExecutionContext): IncomingHttpHeaders {
        const ctx = GqlExecutionContext.create(context).getContext<Req>();
        return ctx.headers;
    }
    
    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const headers = this.getHeaders(context);
        const authHeader: string | undefined = headers.authorization;

        if(authHeader) {
            try {
                await this.jwtService.verify(authHeader.replace('Bearer ', ''));
                return true;
            }
            catch(e) {
                console.error(e);
                return false
            }
        }
        return false;
    }
}
