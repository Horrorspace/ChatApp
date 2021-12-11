import {Injectable, Inject} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {Message} from './messages.model';
import {UsersService} from '../users/users.service';
import {MessageCreationAttrs} from './messages.types';
import {Op, col} from 'sequelize';


@Injectable()
export class MessagesService {
    constructor(
        @InjectModel(Message) private readonly messageRepository: typeof Message,
        @Inject(UsersService) private readonly usersService: UsersService
    ) {}

    public async createMessage(attrs: MessageCreationAttrs): Promise<Message | null> {
        const isFromIdExist: boolean = await this.usersService.checkUserId(attrs.fromUserId);
        const isToIdExist: boolean = await this.usersService.checkUserId(attrs.toUserId);

        if(isFromIdExist && isToIdExist) {
            const message = await this.messageRepository.create(attrs);
            return message;
        }
        else {
            return null
        }
    }

    public async getMessageById(id: number): Promise<Message | null> {
        const message = await this.messageRepository.findOne({where: {id}});
        return message;
    }

    public async getUserMessages(userId: number): Promise<Message[]> {
        const messages = await this.messageRepository.findAll({
            where: {
                [Op.or]: [
                    {fromUserId: userId},
                    {toUserId: userId}
                ]
            },
            order: col('date')
        });
        return messages;
    }

    public async setReadMessage(id: number): Promise<Message | null> {
        const isIdExist: boolean = await this.usersService.checkUserId(id);

        if(isIdExist) {
            await this.messageRepository.update({readed: true}, {where: {id}});
            const message = await this.getMessageById(id);
            return message;
        }
        else {
            return null
        }
    }

    public async deleteMessage(id: number): Promise<boolean> {
        const isIdExist: boolean = await this.usersService.checkUserId(id);

        if(isIdExist) {
            await this.messageRepository.destroy({where: {id}});
            return true;
        }
        else {
            return false
        }
    }
}