import {createReducer, ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {UsersRepository} from '@core/classes/UsersRepository';
import {ContactsActions} from '@store/actions/ContactsActions';
import {IUser} from '@interfaces/IUser';
import {IContactsState} from '@interfaces/IStore';
import {ContactsRepository} from '@core/classes/ContactsRepository';
import {ContactsStateDto} from '@core/dto/contact-state.dto';



export class ContactsReducer {
    private static readonly initialState: IContactsState = new ContactsRepository(new ContactsStateDto([], null)).getState();

    private static buildReducer(builder: ActionReducerMapBuilder<IUser[]>): void {
        builder
            .addCase(ContactsActions.setContacts, (state, action) => {
                const contacts = new ContactsRepository(state);
                contacts.setContacts(action.payload)
                return contacts.getState();
            })
            .addCase(ContactsActions.addContact, (state, action) => {
                const contacts = new ContactsRepository(state);
                contacts.addContact(action.payload)
                return contacts.getState();
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
