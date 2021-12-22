import {IMessage} from '@interfaces/IMessage';
import {Message} from '@core/classes/Message';


export class MessagesRepository {
    private messages: Message[] = [];
    
    
    constructor(messages: IMessage[]) {
        this.messages = messages.map(message => new Message(message));
    }

    public getAllMessages(): Message[] {
        return this.messages
    }

    public addMessage(message: IMessage): Message[] {
        const newMessage = new Message(message); 
        this.messages.push(newMessage);
        return this.getAllMessages();
    }
    
    public setReadMessage(id: number) {
        this.messages = this.messages.map(message => {
            if(message.getId() === id) {
                message.setRead();
                return message;
            }
            else {
                return message;
            }
        })
        return this.getAllMessages();
    }

    public deleteMessage(id: number) {
        this.messages = this.messages.filter(message => message.getId() === id);
        this.getAllMessages();
    }
    
    public getMessages(): IMessage[] {
        return this.messages.map(message => message.getMessage());
    }
}
