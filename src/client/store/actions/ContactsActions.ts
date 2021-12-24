import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {ContactsActTypes} from '@store/types/ContactsActTypes';
import {IUser, IOnline} from '@interfaces/IUser';
import {UsersGql} from '@api/gql/users.gql';


export class ContactsActions {
    private static async  getContactsThunkAction(ids: number[]): Promise<IUser[]> {
        return await UsersGql.getUsers(ids);
    }
    

    public static setContacts = createAction<IUser[], ContactsActTypes>(ContactsActTypes.setContacts);

    public static addContact = createAction<IUser, ContactsActTypes>(ContactsActTypes.addContact);

    public static setOnline = createAction<IOnline, ContactsActTypes>(ContactsActTypes.setOnline);
  
    public static deleteContact = createAction<number, ContactsActTypes>(ContactsActTypes.deleteContact);
    
    public static setCurrentContact = createAction<IUser, ContactsActTypes>(ContactsActTypes.setCurrentContact);
    
    public static clearCurrentContact = createAction<void, ContactsActTypes>(ContactsActTypes.clearCurrentContact);

    public static getContactsThunk = createAsyncThunk<IUser[], number[]>(ContactsActTypes.getContactsThunk, ContactsActions.getContactsThunkAction);
}
