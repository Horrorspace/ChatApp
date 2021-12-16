import {INewMessage} from '@interfaces/IMessage';


export class NewMessageDto implements INewMessage {
    public readonly text: string;
    public readonly toUserId: number;

    constructor(
        text: string,
        toUserId: number,
    ) {
        this.text = text;
        this.toUserId = toUserId;
    }
}