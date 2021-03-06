import {AbstractREST} from '@api/REST/abstract.rest';
import {reqType} from '@api/REST/req-type.enum';
import {ILogin, IRegister, IToken} from '@interfaces/IAuth';
import {IUser} from '@interfaces/IUser';


export class AuthREST extends AbstractREST {
    private static readonly basePath: string = '/auth';

    private static getUrl(path: string): string {
        return `${AuthREST.baseUrl}${AuthREST.basePath}${path}`;
    }
    
    protected static async makeRequest<R, T>(type: reqType, url: string, body: T): Promise<R> {
        try {
            const res = await super.makeRequest<R, T>(type, url, body);
            return res;
        }
        catch(error) {
            console.error(error);
            throw error;
        }
    }
    

    public static async login(login: ILogin): Promise<IUser> {
        const type = reqType.post;
        const path: string = '/login'
        const url = AuthREST.getUrl(path);
        return await AuthREST.makeRequest<IUser, ILogin>(type, url, login);
    }

    public static async logout(): Promise<string> {
        const type = reqType.post;
        const path: string = '/logout'
        const url = AuthREST.getUrl(path);
        return await AuthREST.makeRequest<string, void>(type, url, undefined);
    }

    public static async register(registerData: IRegister): Promise<IUser> {
        const type = reqType.post;
        const path: string = '/register'
        const url = AuthREST.getUrl(path);
        return await AuthREST.makeRequest<IUser, IRegister>(type, url, registerData);
    }
    
    public static async getToken(): Promise<string> {
        const type = reqType.get;
        const path: string = '/getToken'
        const url = AuthREST.getUrl(path);
        const res = await AuthREST.makeRequest<IToken, void>(type, url, undefined);
        return res.access_token;
    }

    public static async getUser(): Promise<IUser> {
        const type = reqType.get;
        const path: string = '/getUser'
        const url = AuthREST.getUrl(path);
        const res = await AuthREST.makeRequest<IUser, void>(type, url, undefined);
        return res;
    }
}
