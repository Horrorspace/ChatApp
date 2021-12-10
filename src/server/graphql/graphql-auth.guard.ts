import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';
import {GqlExecutionContext} from '@nestjs/graphql';


@Injectable()
export class GqlAuthGuard implements CanActivate {
    public canActivate(context: ExecutionContext): boolean {
        const ctx = GqlExecutionContext.create(context);
        ctx;
        return true;
      }
}