import {IAuthState} from '@interfaces/IStore';
import {IToken} from '@interfaces/IAuth';
import {IUser} from '@interfaces/IUser';


export class AuthDto implements IAuthState {
    public readonly user: IUser | null;
    public readonly token: IToken | null;
    public readonly loading: boolean;


    constructor(
        user: IUser | null,
        token: IToken | null,
        loading: boolean
    ) {
        this.user = user;
        this.token = token;
        this.loading = loading;
    }
}