import {IAuthState} from '@interfaces/IStore';
import {IToken} from '@interfaces/IAuth';
import {IUser} from '@interfaces/IUser';


export class AuthDto implements IAuthState {
    public readonly user: IUser | null;
    public readonly token: IToken | null;
    public readonly userLoading: boolean;
    public readonly tokenLoading: boolean;


    constructor(
        user: IUser | null,
        token: IToken | null,
        userLoading: boolean,
        tokenLoading: boolean
    ) {
        this.user = user;
        this.token = token;
        this.userLoading = userLoading;
        this.tokenLoading = tokenLoading;
    }
}