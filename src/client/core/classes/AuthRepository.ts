import {IUser} from '@interfaces/IUser';
import {IToken} from '@interfaces/IAuth';
import {IAuthState} from '@interfaces/IStore';
import {TokenDto} from '@core/dto/token.dto';



export class AuthRepository {
    private user: IUser | null = null;
    private token: IToken | null = null;
    private loading: boolean = false;


    constructor({user, token, loading}: IAuthState) {
        this.user = user;
        this.token = token;
        this.loading = loading;
    }

    public getAuth(): IAuthState {
        return {
            user: this.user,
            token: this.token,
            loading: this.loading
        }
    }


    public getUser(): IUser | null {
        return this.user;
    }

    public getToken(): IToken | null {
        return this.token;
    }

    public getLoading(): boolean {
        return this.loading;
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

    public setLoading(loading: boolean): boolean {
        this.loading = loading;
        console.log(loading);
        return this.getLoading();
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