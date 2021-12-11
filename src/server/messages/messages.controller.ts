import {
    Controller, 
    Inject,
    Post,
    Get,
    Put,
    Delete,
    Body,
    Request,
    HttpException,
    HttpStatus,
    UseGuards
} from '@nestjs/common';
import {Request as Req} from 'express';
import {MessagesService} from './messages.service';
import {Message} from './messages.model';
import {MessageCreationAttrsRaw} from './messages.types';
import {CreateMessageDto} from './dto/create-message.dto';
import {LoggedInGuard} from '../auth/guard/logged-in.guard';
import {MessageIdCheckGuard} from './guard/message-id-check.guard';
import {User} from '@server/users/users.model';



@Controller('/api/messages')
export class MessagesController {
    constructor(@Inject(MessagesService) private readonly messagesService: MessagesService) {}

    private readonly notFoundUserException: HttpException = new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Recipient user id does not exist'
    }, HttpStatus.NOT_FOUND);

    private readonly notFoundMessageException: HttpException = new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Message not found'
    }, HttpStatus.NOT_FOUND);

    private processNewMessage(message: Message | null): Message {
        if(message) {
            return message;
        }
        else {
            throw this.notFoundUserException;
        }
    }

    private processMessage(message: Message | null): Message {
        if(message) {
            return message;
        }
        else {
            throw this.notFoundMessageException;
        }
    }

    @Post()
    @UseGuards(LoggedInGuard)
    public async createMessage(@Request() req: Req, @Body() {toUserId, text}: MessageCreationAttrsRaw): Promise<Message> {
        const user = req.user as User;
        const fromUserId = user.id!;
        const attrs = new CreateMessageDto(fromUserId, toUserId, text);
        const message = await this.messagesService.createMessage(attrs);
        return this.processNewMessage(message);
    }

    @Get('byId')
    @UseGuards(LoggedInGuard)
    @UseGuards(MessageIdCheckGuard)
    public async getMessageById(id: number): Promise<Message> {
        const message = await this.messagesService.getMessageById(id);
        return this.processMessage(message);
    }

    @Get()
    @UseGuards(LoggedInGuard)
    public async getUserMessages(@Request() req: Req): Promise<Message[]> {
        const user = req.user as User;
        const userId = user.id!;
        const messages = await this.messagesService.getUserMessages(userId);
        return messages;
    }

    @Put()
    @UseGuards(LoggedInGuard)
    @UseGuards(MessageIdCheckGuard)
    public async setReadMessage(id: number): Promise<Message>  {
        const message = await this.messagesService.setReadMessage(id);
        return this.processMessage(message);
    }

    @Delete()
    @UseGuards(LoggedInGuard)
    @UseGuards(MessageIdCheckGuard)
    public async deleteMessage(id: number): Promise<null>  {
        const isDelete = await this.messagesService.deleteMessage(id);
        
        if(isDelete) {
            return null
        }
        else {
            throw this.notFoundMessageException
        }
    }
}