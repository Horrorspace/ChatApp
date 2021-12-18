import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {MessagesActTypes} from '@store/types/MessagesActTypes';
import {IMessage} from '@interfaces/IMessage';


export class MessagesActions {
    private static getAllMessagesThunkAction() {}

    private static sendNewMessageThunkAction() {}

    private static setReadMessageThunkAction() {}

    private static deleteMessageThunkAction() {}

    
    public static setMessages = createAction<IMessage[]>(MessagesActTypes.setMessages);

    public static addMessage = createAction<IMessage>(MessagesActTypes.addMessage);

    public static setReadMessage = createAction<number>(MessagesActTypes.setReadMessage);

    public static deleteMessage = createAction<number>(MessagesActTypes.deleteMessage);

    public static getAllMessagesThunk = createAsyncThunk<undefined>(MessagesActTypes.getAllMessagesThunk, this.getAllMessagesThunkAction);
    
    public static sendNewMessageThunk = createAsyncThunk<undefined>(MessagesActTypes.sendNewMessageThunk, this.sendNewMessageThunkAction);
    
    public static setReadMessageThunk = createAsyncThunk<undefined>(MessagesActTypes.setReadMessageThunk, this.setReadMessageThunkAction);
    
    public static deleteMessageThunk = createAsyncThunk<undefined>(MessagesActTypes.deleteMessageThunk, this.deleteMessageThunkAction);
}
