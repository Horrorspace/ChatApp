import {createReducer, ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {ContactsActions} from '@store/actions/ContactsActions';
import {IContactsState} from '@interfaces/IStore';
import {ContactsRepository} from '@core/classes/ContactsRepository';
import {ContactsStateDto} from '@core/dto/contact-state.dto';



export class ContactsReducer {
    private static readonly initialState: IContactsState = new ContactsRepository(new ContactsStateDto([], null)).getState();

    private static buildReducer(builder: ActionReducerMapBuilder<IContactsState>): void {
        builder
            .addCase(ContactsActions.setContacts, (state, action) => {
                const contacts = new ContactsRepository(state);
                contacts.setContacts(action.payload);
                return contacts.getState();
            })
            .addCase(ContactsActions.addContact, (state, action) => {
                const contacts = new ContactsRepository(state);
                contacts.addContact(action.payload);
                return contacts.getState();
            })
            .addCase(ContactsActions.setOnline, (state, action) => {
                const contacts = new ContactsRepository(state);
                contacts.setOnline(action.payload);
                return contacts.getState();
            })
            .addCase(ContactsActions.deleteContact, (state, action) => {
                const contacts = new ContactsRepository(state);
                contacts.deleteUser(action.payload);
                return contacts.getState();
            })
            .addCase(ContactsActions.setCurrentContact, (state, action) => {
                const contacts = new ContactsRepository(state);
                contacts.setCurrentContact(action.payload);
                return contacts.getState();
            })
            .addCase(ContactsActions.clearCurrentContact, state => {
                const contacts = new ContactsRepository(state);
                contacts.clearCurrentContact();
                return contacts.getState();
            })
            .addCase(ContactsActions.getContactsThunk.fulfilled, (state, action) => {
                const contacts = new ContactsRepository(state);
                contacts.setContacts(action.payload);
                return contacts.getState();
            });
    }

    public static reducer = createReducer(ContactsReducer.initialState, ContactsReducer.buildReducer);
}
