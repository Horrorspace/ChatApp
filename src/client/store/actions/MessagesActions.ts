import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {MessagesActTypes} from '@store/types/MessagesActTypes';
import {IMessage, INewMessage} from '@interfaces/IMessage';
import {MessagesGql} from '@api/gql/messages.gql';
import {Store} from '@store/Store';



export class MessagesActions {
    private static async  getAllMessagesThunkAction(): Promise<void> {
        const res = await MessagesGql.getAllMessages();
        Store.value.dispatch(MessagesActions.setMessages(res.messages));
    }

    private static setReadMessageThunkAction() {}

    private static deleteMessageThunkAction() {}

    
    public static setMessages = createAction<IMessage[], MessagesActTypes>(MessagesActTypes.setMessages);

    public static addMessage = createAction<IMessage, MessagesActTypes>(MessagesActTypes.addMessage);

    public static sendNewMessage = createAction<INewMessage, MessagesActTypes>(MessagesActTypes.sendNewMessage);

    public static setReadMessage = createAction<number, MessagesActTypes>(MessagesActTypes.setReadMessage);

    public static deleteMessage = createAction<number, MessagesActTypes>(MessagesActTypes.deleteMessage);

    public static getAllMessagesThunk = createAsyncThunk<void, void>(MessagesActTypes.getAllMessagesThunk, MessagesActions.getAllMessagesThunkAction);
    
    public static setReadMessageThunk = createAsyncThunk<void>(MessagesActTypes.setReadMessageThunk, MessagesActions.setReadMessageThunkAction);
    
    public static deleteMessageThunk = createAsyncThunk<void>(MessagesActTypes.deleteMessageThunk, MessagesActions.deleteMessageThunkAction);
}
