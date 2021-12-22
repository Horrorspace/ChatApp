import {createReducer, ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {UsersRepository} from '@core/classes/UsersRepository';
import {ContactsActions} from '@store/actions/ContactsActions';
import {IUser} from '@interfaces/IUser';


export class ContactsReducer {
    private static readonly initialState: IUser[] = new UsersRepository([]).getUsers();

    private static buildReducer(builder: ActionReducerMapBuilder<IUser[]>): void {
        builder
            .addCase(ContactsActions.setContacts, (state, action) => {
                return action.payload;
            })
            .addCase(ContactsActions.addContact, (state, action) => {
                const users = new UsersRepository(state);
                users.addUser(action.payload);
                return users.getUsers();
            })
            .addCase(ContactsActions.setOnline, (state, action) => {
                const users = new UsersRepository(state);
                users.setOnline(action.payload);
                return users.getUsers();
            })
            .addCase(ContactsActions.deleteContact, (state, action) => {
                const users = new UsersRepository(state);
                users.deleteUser(action.payload);
                return users.getUsers();
            })
            .addCase(ContactsActions.getContactsThunk.fulfilled, (state, action) => {
                return action.payload;
            })
    }

    public static reducer = createReducer(ContactsReducer.initialState, ContactsReducer.buildReducer);
}