import {configureStore, Reducer, combineReducers} from '@reduxjs/toolkit';
import {IRootState} from '@interfaces/IStore';
import {AuthReducer} from '@store/reducers/AuthReducer';
import {ContactsReducer} from '@store/reducers/ContactsReducer';
import {MessagesReducer} from '@store/reducers/MessagesReducer';
import {UsersReducer} from '@store/reducers/UsersReducer';
import {Middleware} from '@store/middleware/Middleware';



export class Store {
    private static readonly reducer: Reducer<IRootState> = combineReducers({
        Auth: AuthReducer.reducer,
        Contacts: ContactsReducer.reducer,
        Messages: MessagesReducer.reducer,
        Users: UsersReducer.reducer
    });
    
    public static readonly value = configureStore({
        reducer: Store.reducer,
        middleware: Middleware.middleware
    });

    public static start() {
        Middleware.start();
    }
}