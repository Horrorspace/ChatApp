import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {MessagesActTypes} from '@store/types/MessagesActTypes';
import {IMessage, INewMessage} from '@interfaces/IMessage';
import {MessagesGql} from '@api/gql/messages.gql';



export class MessagesActions {
    private static async  getAllMessagesThunkAction(): Promise<IMessage[]> {
        return await MessagesGql.getAllMessages();
    }

    private static setReadMessageThunkAction() {}

    private static deleteMessageThunkAction() {}

    
    public static setMessages = createAction<IMessage[], MessagesActTypes>(MessagesActTypes.setMessages);

    public static addMessage = createAction<IMessage, MessagesActTypes>(MessagesActTypes.addMessage);

    public static sendNewMessage = createAction<INewMessage, MessagesActTypes>(MessagesActTypes.sendNewMessageThunk);

    public static setReadMessage = createAction<number, MessagesActTypes>(MessagesActTypes.setReadMessage);

    public static deleteMessage = createAction<number, MessagesActTypes>(MessagesActTypes.deleteMessage);

    public static getAllMessagesThunk = createAsyncThunk<IMessage[], void>(MessagesActTypes.getAllMessagesThunk, MessagesActions.getAllMessagesThunkAction);
    
    public static setReadMessageThunk = createAsyncThunk<void>(MessagesActTypes.setReadMessageThunk, MessagesActions.setReadMessageThunkAction);
    
    public static deleteMessageThunk = createAsyncThunk<void>(MessagesActTypes.deleteMessageThunk, MessagesActions.deleteMessageThunkAction);
}
