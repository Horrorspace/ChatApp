import {IMessage} from '@interfaces/IMessage';
import {NewMessageDto} from './new-message.dto';


export class MessageDto extends NewMessageDto implements IMessage {
    public readonly id: number;
    public readonly fromUserId: number;
    public readonly date: Date;
    public readonly readed: boolean;

    constructor(
        id: number,
        text: string,
        fromUserId: number,
        toUserId: number,
        date: Date,
        readed: boolean
    ) {
        super(text, toUserId);
        this.id = id;
        this.fromUserId = fromUserId;
        this.date = date;
        this.readed = readed;
    }
}