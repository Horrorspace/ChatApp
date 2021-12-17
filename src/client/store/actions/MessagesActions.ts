import {createAction} from '@reduxjs/toolkit'
import {MessagesActTypes} from '@redux/types/MessagesActTypes';
import {MessagesActTypes} from '@core/classes/MessageRepository';
import {IMessage} from '@interfaces/IMessage';


export class MessagesActions {
    public static setMessages = createAction<IMessage[]>(MessagesActTypes.setMessages);
    public static addMessage  = createAction<IMessage>(MessagesActTypes.addMessage);
    public static deleteMessageFromRepository = createAction<number>(MessagesActTypes.deleteMessageFromRepository);
    public static clearMessages  = createAction<undefined>(MessagesActTypes.clearMessages);
}
