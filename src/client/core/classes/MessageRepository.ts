import {IMessage} from '@interfaces/IMessage';


export class MessageRepository {
    private messages: IMessage[] = [];
    
    
    constructor(messages: IMessage[]) {
        this.messages = messages;
    }

    public getAllMessages() {
        return this.messages
    }

    public addMessage(message: IMessage) {
        this.messages.push(message);
    }

    public deleteMessage(id: number) {
        this.messages = this.messages.filter(message => message.id === id)
    }
}