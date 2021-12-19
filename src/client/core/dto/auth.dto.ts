import {IAuthState} from '@interfaces/IStore';
import {IToken} from '@interfaces/IAuth';
import {IUser} from '@interfaces/IUser';


export class AuthDto implements IAuthState {
    public readonly user: IUser | null;
    public readonly token: IToken | null;


    constructor(
        user: IUser | null,
        token: IToken | null
    ) {
        this.user = user;
        this.token = token;
    }
}