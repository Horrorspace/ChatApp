import {IToken} from '@interfaces/IAuth';
import {IUser} from '@interfaces/IUser';
import {IMessage} from '@interfaces/IMessage';
import {IUser} from '@interfaces/IUser';



export interface IAuthState {
    user: IUser | null;
    token: IToken | null;
}

export interface IContactsState {
    contacts: IUser[];
    currentContact: IUser | null; 
}

export interface IRootState {
    Auth: IAuthState;
    Contacts: IUser[];
    Messages: IMessage[];
}
