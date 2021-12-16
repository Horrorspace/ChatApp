import {Injectable, ExecutionContext} from '@nestjs/common';
import {GqlExecutionContext} from '@nestjs/graphql';
import {AuthGuard} from '@nestjs/passport';


@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
    public getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);
        console.log("gql simple context: ", context);
        console.log("gqlContext: ", ctx.getContext());
        return ctx.getContext().req;
    }
}
