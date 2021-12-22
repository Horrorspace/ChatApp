import {AbstractSocket} from '@api/socket/abstract.socket';
import {INewMessage, IMessage} from '@interfaces/IMessage';
import {messageEventType} from '@api/socket/message-event-type.enum';


export class MessagesSocket extends AbstractSocket {
    private static onMessage(message: IMessage) {
        console.log(message);
    }
  
    public static sendMessage(message: INewMessage) {
        MessagesSocket.socket.emit(messageEventType.message, message);
    }

    public static refreshToken() {
        MessagesSocket.socket.auth = {
            token: MessagesSocket.updateToken()
        }
    }
    
    public static start() {
        MessagesSocket.socket.on(messageEventType.message, MessagesSocket.onMessage);
    }
}
