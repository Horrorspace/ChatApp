import {Inject, UseGuards, UseInterceptors, ClassSerializerInterceptor} from '@nestjs/common';
import {Resolver, Query, Context} from '@nestjs/graphql';
import {MessagesService} from './messages.service';
import {MessageEntity} from './message.entity';
import {GqlAuthGuard} from '../graphql/graphql-auth.guard';
import {JwtService} from '@nestjs/jwt';
import {JwtPayload, headersObj} from '../auth/auth.types';




@Resolver('Message')
export class MessagesResolver {
    constructor(
        @Inject(MessagesService) private readonly messagesService: MessagesService,
        @Inject(JwtService) private readonly jwtService: JwtService
    ) {}


    @Query()
    @UseGuards(GqlAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async messages(@Context() context: headersObj): Promise<MessageEntity[]> {
        const authHeader: string | undefined = context.headers.authorization;
        
        if(authHeader) {
            const {sub} = this.jwtService.decode(authHeader) as JwtPayload;
            const messages = await this.messagesService.getUserMessages(sub);
            return messages.map(message => {
                return new MessageEntity(message.get())
            });
        }
        else {
            return []
        }
    }
}
