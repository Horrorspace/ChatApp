import {IUser} from '@interfaces/IUser';
import {IToken} from '@interfaces/IAuth';
import {IAuthState} from '@interfaces/IStore';
import {TokenDto} from '@core/dto/token.dto';



export class AuthRepository {
    private user: IUser | null = null;
    private token: IToken | null = null;


    constructor({user, token}: IAuthState) {
        this.user = user;
        this.token = token;
    }

    public getAuth(): IAuthState {
        return {
            user: this.user,
            token: this.token
        }
    }


    public getUser(): IUser | null {
        return this.user;
    }

    public getToken(): IToken | null {
        return this.token;
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