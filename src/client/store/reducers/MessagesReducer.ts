import {createReducer, ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {MessageRepository} from '@core/classes/MessageRepository';
import {MessagesActions} from '@store/actions/MessagesActions';
import {IMessage} from '@interfaces/IMessage';



export class MessagesReducer {
    private static readonly initialState: IMessage[] = new MessageRepository([]).getMessages();
  
    private static buildReducer(builder: ActionReducerMapBuilder<MessageRepository>): void {
        builder
            .addCase(MessagesActions.setMessages, (state, action) => {
                return action.payload;
            })
            .addCase(MessagesActions.addMessage, (state, action) => {
                const messages = new MessageRepository(state);
                messages.addMessage(action.payload);
                return messages.getMessages();
            })
            .addCase(MessagesActions.setReadMessage, (state, action) => {
                const messages = new MessageRepository(state);
                messages.setReadMessage(action.payload);
                return messages.getMessages();
            })
            .addCase(MessagesActions.deleteMessage, (state, action) => {
                const messages = new MessageRepository(state);
                messages.deleteMessage(action.payload);
                return messages.getMessages();
            })
            .addCase(MessagesActions.getAllMessagesThunk.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(MessagesActions.sendNewMessageThunk.fulfilled, (state, action) => {
                const messages = new MessageRepository(state);
                messages.addMessage(action.payload);
                return messages.getMessages();
            });
    }
  
    public static reducer = createReducer(MessageReducer.initialState, MessageReducer.buildReducer);
}
