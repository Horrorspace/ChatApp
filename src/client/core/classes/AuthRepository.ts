import {IUser} from '@interfaces/IUser';
import {IToken} from '@interfaces/IAuth';
import {IAuthState} from '@interfaces/IStore';
import {TokenDto} from '@core/dto/token.dto';



export class AuthRepository {
    private user: IUser | null = null;
    private token: IToken | null = null;
    private userLoading: boolean = false;
    private tokenLoading: boolean = false;


    constructor({user, token, userLoading, tokenLoading}: IAuthState) {
        this.user = user;
        this.token = token;
        this.userLoading = userLoading;
        this.tokenLoading = tokenLoading;
    }

    public getAuth(): IAuthState {
        return {
            user: this.user,
            token: this.token,
            userLoading: this.userLoading,
            tokenLoading: this.tokenLoading
        }
    }


    public getUser(): IUser | null {
        return this.user;
    }

    public getToken(): IToken | null {
        return this.token;
    }

    public getUserLoading(): boolean {
        return this.userLoading;
    }

    public getTokenLoading(): boolean {
        return this.tokenLoading;
    }

    public setUser(user: IUser): IUser | null {
        this.user = user;
        return this.getUser();
    }

    public setToken(tokenStr: string): IToken | null {
        const token = new TokenDto(tokenStr).getValue();
        this.token = token;
        return this.getToken();
    }

    public setUserLoading(userLoading: boolean): boolean {
        this.userLoading = userLoading;
        return this.getUserLoading();
    }

    public setTokenLoading(tokenLoading: boolean): boolean {
        this.tokenLoading = tokenLoading;
        return this.getTokenLoading();
    }

    public clearUser(): void {
        this.user = null;
    }

    public clearToken(): void {
        this.token = null;
    }

    public clearAuth(): void {
        this.user = null;
        this.token = null;
    }
}