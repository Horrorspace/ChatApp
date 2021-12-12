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
    UseGuards,
    UseInterceptors,
    ClassSerializerInterceptor
} from '@nestjs/common';
import {Request as Req} from 'express';
import {MessagesService} from './messages.service';
import {Message} from './messages.model';
import {CreateMessageDto} from './dto/create-message.dto';
import {MessageIdDto} from './dto/message-id.dto';
import {LoggedInGuard} from '../auth/guard/logged-in.guard';
import {MessageIdCheckGuard} from './guard/message-id-check.guard';
import {User} from '@server/users/users.model';
import {MessageEntity} from './message.entity';
import {
    ApiOperation, 
    ApiOkResponse,
    ApiForbiddenResponse, 
    ApiTags,
    ApiBasicAuth,
    ApiNotFoundResponse
} from '@nestjs/swagger';


@ApiBasicAuth()
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

    private processNewMessage(message: Message | null): MessageEntity {
        if(message) {
            return new MessageEntity(message.get());
        }
        else {
            throw this.notFoundUserException;
        }
    }

    private processMessage(message: Message | null): MessageEntity {
        if(message) {
            return new MessageEntity(message.get());
        }
        else {
            throw this.notFoundMessageException;
        }
    }

    @ApiTags('Messages')
    @ApiOperation({summary: 'Создание сообщения'})
    @ApiOkResponse({
        description: 'Сообщение создано',
        type: MessageEntity
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен по причине отсутствующей авторизации'})
    @ApiNotFoundResponse({description: 'Получатель не найден'})
    @Post()
    @UseGuards(LoggedInGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async createMessage(@Request() req: Req, @Body() {toUserId, text}: CreateMessageDto): Promise<MessageEntity> {
        const user = req.user as User;
        const fromUserId = user.id!;
        const attrs = new CreateMessageDto(fromUserId, toUserId, text);
        const message = await this.messagesService.createMessage(attrs);
        return this.processNewMessage(message);
    }

    @ApiTags('Messages')
    @ApiOperation({summary: 'Получение сообщения по идентификатору'})
    @ApiOkResponse({
        description: 'Сообщение получено',
        type: MessageEntity
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен'})
    @ApiNotFoundResponse({description: 'Сообщение не найдено'})
    @Get('byId')
    @UseGuards(LoggedInGuard)
    @UseGuards(MessageIdCheckGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async getMessageById(@Body() {id}: MessageIdDto): Promise<MessageEntity> {
        const message = await this.messagesService.getMessageById(id);
        return this.processMessage(message);
    }

    @ApiTags('Messages')
    @ApiOperation({summary: 'Получение всех сообщений пользователя'})
    @ApiOkResponse({
        description: 'Сообщения получены',
        type: [MessageEntity]
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен по причине отсутствующей авторизации'})
    @Get()
    @UseGuards(LoggedInGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async getUserMessages(@Request() req: Req): Promise<MessageEntity[]> {
        const user = req.user as User;
        const userId = user.id!;
        const messages = await this.messagesService.getUserMessages(userId);
        return messages.map(message => {
            return new MessageEntity(message.get())
        });
    }

    @ApiTags('Messages')
    @ApiOperation({summary: 'Установка сообщению статуса "прочтено"'})
    @ApiOkResponse({
        description: 'Статус установлен',
        type: MessageEntity
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен'})
    @ApiNotFoundResponse({description: 'Сообщение не найдено'})
    @Put('byId')
    @UseGuards(LoggedInGuard)
    @UseGuards(MessageIdCheckGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    public async setReadMessage(@Body() {id}: MessageIdDto): Promise<MessageEntity>  {
        const message = await this.messagesService.setReadMessage(id);
        return this.processMessage(message);
    }

    @ApiTags('Messages')
    @ApiOperation({summary: 'Удаление сообщения'})
    @ApiOkResponse({
        description: 'Сообщение удалено'
    })
    @ApiForbiddenResponse({description: 'Доступ запрещен'})
    @ApiNotFoundResponse({description: 'Сообщение не найдено'})
    @Delete('byId')
    @UseGuards(LoggedInGuard)
    @UseGuards(MessageIdCheckGuard)
    public async deleteMessage(@Body() {id}: MessageIdDto): Promise<null>  {
        const isDelete = await this.messagesService.deleteMessage(id);
        
        if(isDelete) {
            return null
        }
        else {
            throw this.notFoundMessageException
        }
    }
}