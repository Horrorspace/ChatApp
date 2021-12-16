import {Inject, UseGuards, UseInterceptors, ClassSerializerInterceptor} from '@nestjs/common';
import {Resolver, Query, Args, Mutation} from '@nestjs/graphql';
import {MessagesService} from './messages.service';
import {MessageEntity} from './message.entity';
import {GqlAuthGuard} from '../graphql/graphql-auth.guard';




@Resolver('Message')
export class MEssagesResolver {
    constructor(@Inject(MessagesService) private readonly messagesService: MessagesService) {}

    @Query()
    @UseGuards(GqlAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async messages(): Promise<MessageEntity[]> {
        const user = req.user as User;
        const userId = user.id!;
        const messages = await this.messagesService.getUserMessages(userId);
        return messages.map(message => {
            return new MessageEntity(message.get())
        });
    }
}
