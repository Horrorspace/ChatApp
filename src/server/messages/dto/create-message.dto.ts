import {MessageCreationAttrs} from '../messages.types';

export class  CreateMessageDto implements MessageCreationAttrs {
    public readonly fromUserId: number;
    public readonly toUserId: number;
    public readonly text: string;

    constructor(fromUserId: number, toUserId: number, text: string) {
        this.fromUserId = fromUserId;
        this.toUserId = toUserId;
        this.text = text;
    }
}