import {createAction, createReducer} from '@reduxjs/toolkit';
import {MessageRepository} from '@core/classes/MessageRepository';
import {MessagesActions} from '@store/actions/MessagesActions';



export class MessageReducer {
    private static readonly initialState: MessageRepository = new MessageRepository([]);
  
    private static buildReducer(builder) {
        builder
            .addCase(MessagesActions.setMessages, (state, action) => {
                state.value = action.payload;
            })
    }
  
    public static reducer = createReducer(this.initialState, this.buildReducer)
}
