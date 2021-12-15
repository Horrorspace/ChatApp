import {Inject, UseGuards} from '@nestjs/common';
import {Resolver, Query, Args, Mutation} from '@nestjs/graphql';
import {MessagesService} from './messages.service';
import {GqlAuthGuard} from '../graphql/graphql-auth.guard';




@Resolver('Message')
export class MEssagesResolver {
    constructor(@Inject(MessagesService) private readonly messagesService: MessagesService) {}

    @Query()
    @UseGuards(GqlAuthGuard)
    public async messages() {}
}