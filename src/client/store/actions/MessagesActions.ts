import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {MessagesActTypes} from '@store/types/MessagesActTypes';
import {IMessage} from '@interfaces/IMessage';


export class MessagesActions {
    private static getAllMessagesThunkAction() {}

    private static sendNewMessageThunkAction() {}

    private static setReadMessageThunkAction() {}

    private static deleteMessageThunkAction() {}

    
    public static setMessages = createAction<IMessage[], MessagesActTypes>(MessagesActTypes.setMessages);

    public static addMessage = createAction<IMessage, MessagesActTypes>(MessagesActTypes.addMessage);

    public static setReadMessage = createAction<number, MessagesActTypes>(MessagesActTypes.setReadMessage);

    public static deleteMessage = createAction<number, MessagesActTypes>(MessagesActTypes.deleteMessage);

    public static getAllMessagesThunk = createAsyncThunk<void>(MessagesActTypes.getAllMessagesThunk, MessagesActions.getAllMessagesThunkAction);
    
    public static sendNewMessageThunk = createAsyncThunk<void>(MessagesActTypes.sendNewMessageThunk, MessagesActions.sendNewMessageThunkAction);
    
    public static setReadMessageThunk = createAsyncThunk<void>(MessagesActTypes.setReadMessageThunk, MessagesActions.setReadMessageThunkAction);
    
    public static deleteMessageThunk = createAsyncThunk<void>(MessagesActTypes.deleteMessageThunk, MessagesActions.deleteMessageThunkAction);
}
