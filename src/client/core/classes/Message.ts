import {MessageDto} from '@core/classes/message.dto';
import {IMessage} from '@interfaces/IMessage';


export class Message extends MessageDto {
    constructor(
        id: number,
        text: string,
        fromUserId: number,
        toUserId: number,
        date: Date,
        readed: boolean
    ) {
        super(
            id,
            text,
            fromUserId,
            toUserId,
            date,
            readed
        );
    }
  
    public getMessage(): IMessage {
        return new MessageDto(
            this.id,
            this.text,
            this.fromUserId,
            this.toUserId,
            this.date,
            this.readed
        )
    }
  
    public setRead(): IMessage {
        this.readed = true;
        return this.getMessage();
    }
}
