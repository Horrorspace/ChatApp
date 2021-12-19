import {createReducer, ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {MessageRepository} from '@core/classes/MessageRepository';
import {MessagesActions} from '@store/actions/MessagesActions';



export class MessageReducer {
    private static readonly initialState: MessageRepository = new MessageRepository([]);
  
    private static buildReducer(builder: ActionReducerMapBuilder<MessageRepository>): void {
        builder
            .addCase(MessagesActions.setMessages, (state, action) => {
                state = new MessageRepository(action.payload);
            })
            .addCase(MessagesActions.addMessage, (state, action) => {
                state.addMessage(action.payload);
            })
            .addCase(MessagesActions.setReadMessage, (state, action) => {
                state.setReadMessage(action.payload);
            })
            .addCase(MessagesActions.deleteMessage, (state, action) => {
                state.deleteMessage(action.payload);
            });
    }
  
    public static reducer = createReducer(MessageReducer.initialState, MessageReducer.buildReducer);
}
