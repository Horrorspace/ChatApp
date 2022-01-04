import {createReducer, ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {MessagesRepository} from '@core/classes/MessagesRepository';
import {MessagesActions} from '@store/actions/MessagesActions';
import {IMessage} from '@interfaces/IMessage';
import {MessagesSocket} from '@api/socket/messages.socket';



export class MessagesReducer {
    private static readonly initialState: IMessage[] = new MessagesRepository([]).getMessages();
  
    private static buildReducer(builder: ActionReducerMapBuilder<IMessage[]>): void {
        builder
            .addCase(MessagesActions.setMessages, (state, action) => {
                return action.payload;
            })
            .addCase(MessagesActions.addMessage, (state, action) => {
                const messages = new MessagesRepository(state);
                messages.addMessage(action.payload);
                return messages.getMessages();
            })
            .addCase(MessagesActions.sendNewMessage, (state, action) => {
                MessagesSocket.sendMessage(action.payload);
                return state;
            })
            .addCase(MessagesActions.setReadMessage, (state, action) => {
                const messages = new MessagesRepository(state);
                messages.setReadMessage(action.payload);
                return messages.getMessages();
            })
            .addCase(MessagesActions.deleteMessage, (state, action) => {
                const messages = new MessagesRepository(state);
                messages.deleteMessage(action.payload);
                return messages.getMessages();
            });
    }
  
    public static reducer = createReducer(MessagesReducer.initialState, MessagesReducer.buildReducer);
}
