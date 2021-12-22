import {IToken} from '@interfaces/IAuth';
import {IUser} from '@interfaces/IUser';
import {IMessage} from '@interfaces/IMessage';



export interface IAuthState {
    user: IUser | null;
    token: IToken | null;
}


export interface IRootState {
    Auth: IAuthState;
    Contacts: IUser[];
    Messages: IMessage[];
}