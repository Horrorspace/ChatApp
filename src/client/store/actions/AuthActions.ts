import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {AuthActTypes} from '@store/types/AuthActTypes';
import {ILogin, IRegister} from '@interfaces/IAuth';
import {IUser} from '@interfaces/IUser';
import {AuthREST} from '@api/REST/auth.rest';

// export const setAuth = createAction<IUser>(AuthActTypes.setAuth);

export class AuthActions {
    private static async loginThunkAction(login: ILogin): Promise<IUser> {
        return await AuthREST.login(login);
    }

    private static async registerThunkAction(registerData: IRegister): Promise<IUser> {
        return await AuthREST.register(registerData);
    }

    private static async logoutThunkAction(): Promise<void> {
        await AuthREST.logout();
    }

    private static async getTokenThunkAction(): Promise<string> {
        return await AuthREST.getToken();
    }

    private static async getUserThunkAction(): Promise<IUser> {
        return await AuthREST.getUser();
    }

    
    public static setAuth = createAction<IUser>(AuthActTypes.setAuth);

    public static clearAuth = createAction<void>(AuthActTypes.clearAuth);

    public static setToken = createAction<string>(AuthActTypes.setToken);

    public static clearToken = createAction<void>(AuthActTypes.clearToken);

    public static loginThunk = createAsyncThunk<IUser, ILogin>(AuthActTypes.loginThunk, AuthActions.loginThunkAction);

    public static registerThunk = createAsyncThunk<IUser, IRegister>(AuthActTypes.registerThunk, AuthActions.registerThunkAction);

    public static logoutThunk = createAsyncThunk<void, void>(AuthActTypes.logoutThunk, AuthActions.logoutThunkAction);

    public static getTokenThunk = createAsyncThunk<string, void>(AuthActTypes.getTokenThunk, AuthActions.getTokenThunkAction);

    public static getUserThunk = createAsyncThunk<IUser, void>(AuthActTypes.getUserThunk, AuthActions.getUserThunkAction);
}
