import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {Message} from './messages.model';
import {MessageCreationAttrs} from './messages.types';
import {Op} from 'sequelize';


@Injectable()
export class MessagesService {
    constructor(@InjectModel(Message) private readonly messageRepository: typeof Message) {}

    public async createMessage(attrs: MessageCreationAttrs): Promise<Message> {
        const message = await this.messageRepository.create(attrs);
        return message;
    }

    public async getMessageById(id: number): Promise<Message | null> {
        const message = await this.messageRepository.findOne({where: {id}});
        return message;
    }

    public async getUserMessages(userId: number): Promise<Message[] | null> {
        const messages = await this.messageRepository.findAll({
            where: {
                [Op.or]: [
                    {fromUserId: userId},
                    {toUserId: userId}
                ]
            }
        });
        return messages;
    }

    public async setReadMessage(id: number): Promise<Message | null> {
        await this.messageRepository.update({readed: true}, {where: {id}});
        const message = await this.getMessageById(id);
        return message;
    }

    public async deleteMessage(id: number): Promise<null> {
        await this.messageRepository.destroy({where: {id}});
        return null;
    }
}