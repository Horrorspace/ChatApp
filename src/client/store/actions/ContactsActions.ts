import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {ContactsActTypes} from '@store/types/ContactsActTypes';
import {IUser} from '@interfaces/IUser';
import {UsersGql} from '@api/gql/users.gql';


export class ContactsActions {
    private static async  getContactsThunkAction(ids: number[]): Promise<IUser[]> {
        return await UsersGql.getUsers(ids);
    }
    

    public static setContacts = createAction<IUser[], MessagesActTypes>(ContactsActTypes.setContacts);

    public static addContact = createAction<IUser, MessagesActTypes>(ContactsActTypes.addContact);

    public static setOnline = createAction<number, MessagesActTypes>(ContactsActTypes.setOnline);
  
    public static deleteContact = createAction<number, MessagesActTypes>(ContactsActTypes.deleteContact);

    public static getContactsThunk = createAsyncThunk<number[], IUser[]>(ContactsActTypes.getAllMessagesThunk, ContactsActions.getContactsThunkAction);
}
