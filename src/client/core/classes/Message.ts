import {MessageDto} from '@core/dto/message.dto';
import {IMessage} from '@interfaces/IMessage';


export class Message extends MessageDto {
    constructor({
        id,
        text,
        fromUserId,
        toUserId,
        date,
        readed
    }: IMessage) {
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
    
    public getId(): number {
        return this.id;
    }
  
    public setRead(): IMessage {
        this.readed = true;
        return this.getMessage();
    }
}
