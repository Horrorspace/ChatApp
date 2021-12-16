import {Injectable, CanActivate, ExecutionContext} from '@nestjs/common';
import {ExecutionContextHost} from '@nestjs/core/helpers/execution-context-host;
import {GqlExecutionContext} from '@nestjs/graphql';
import {AuthGuard} from '@nestjs/passport';


@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') implements CanActivate {
    public getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        console.log("gql simple context: ", context);
        console.log("gqlContext: ", ctx.getContext());
        return ctx.getContext().req;
    }
    
    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx = this.getRequest(context);
        const result = (await super.canActivate(new ExecutionContextHost([ctx]))) as boolean;
        return true;
    }
}
