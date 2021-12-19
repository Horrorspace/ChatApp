import {IToken} from '@interfaces/IAuth';
import {IUser} from '@interfaces/IUser';
// import {MessageRepository} from '@core/classes/MessageRepository';


export interface IMessageState {}

export interface IAuthState {
    user: IUser | null;
    token: IToken | null;
}