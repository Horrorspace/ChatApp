import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {MessagesActTypes} from '@store/types/MessagesActTypes';
import {IMessage} from '@interfaces/IMessage';


export class MessagesActions {
    private static getAllMessagesThunk() {}

    private static sendNewMessageThunk() {}

    private static setReadMessageThunk() {}

    private static deleteMessageThunk() {}

    
    public static setMessages = createAction<IMessage[]>(MessagesActTypes.setMessages);

    public static addMessage = createAction<IMessage>(MessagesActTypes.addMessage);

    public static setReadMessageRepository  = createAction<number>(MessagesActTypes.setReadMessageRepository);

    public static deleteMessageFromRepository = createAction<number>(MessagesActTypes.deleteMessageFromRepository);

    public static clearMessages = createAction<undefined>(MessagesActTypes.clearMessages);

    public static getAllMessages = createAsyncThunk<undefined>(MessagesActTypes.getAllMessages, this.getAllMessagesThunk);


}
