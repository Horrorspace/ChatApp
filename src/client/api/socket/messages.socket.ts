import {AbstractSocket} from '@api/socket/abstract.socket';
import {INewMessage, IMessage} from '@interfaces/IMessage';
import {messageEventType} from '@api/socket/message-event-type.enum';
import {Store} from '@store/Store';
import {MessagesActions} from '@store/actions/MessagesActions';


export class MessagesSocket extends AbstractSocket {
    private static onMessage(message: IMessage): void {
        Store.value.dispatch(MessagesActions.addMessage(message));
    }

    private static sendAuth(): void {
        MessagesSocket.socket.emit(messageEventType.auth, {
            access_token: MessagesSocket.token
        });
    }
  
    public static sendMessage(message: INewMessage): void {
        MessagesSocket.socket.emit(messageEventType.message, message);
    }

    public static refreshToken(): void {
        const token = MessagesSocket.updateToken();
        MessagesSocket.socket.auth = {
            token
        };
        MessagesSocket.token = token;
        MessagesSocket.sendAuth();
    }

    public static clearToken(): void {
        MessagesSocket.socket.auth = {
            token: ''
        };
        MessagesSocket.token = '';
    }
    
    public static start(): void {
        MessagesSocket.socket.on(messageEventType.message, MessagesSocket.onMessage);
        MessagesSocket.socket.connect();
    }

    public static stop(): void {
        MessagesSocket.socket.disconnect();
        MessagesSocket.clearToken();
    }
}
