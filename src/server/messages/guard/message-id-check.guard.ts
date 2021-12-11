import {Injectable, Inject, CanActivate, ExecutionContext} from '@nestjs/common';
import {User} from '../../users/users.model';
import {Request as Req} from 'express';
import {MessagesService} from '../messages.service';



@Injectable()
export class MessageIdCheckGuard implements CanActivate {
    constructor(@Inject(MessagesService) private readonly messagesService: MessagesService) {}

    public async canActivate(context: ExecutionContext) {
        const req: Req = context.switchToHttp().getRequest();
        const user = req.user as User | undefined;
        const id = req.body.id as number;

        if(user) {
            const userId = user.id as number;
            const message = await this.messagesService.getMessageById(id);

            if(message && (message.fromUserId === userId || message.toUserId === userId)) {
                return true
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }
}