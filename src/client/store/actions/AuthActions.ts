import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {AuthActTypes} from '@store/types/AuthActTypes';
import {ILogin, IRegister} from '@interfaces/IAuth';
import {IUser} from '@interfaces/IUser';
import {AuthREST} from '@api/REST/auth.rest';
import {Store} from '@store/Store';

// export const setAuth = createAction<IUser>(AuthActTypes.setAuth);

export class AuthActions {
    private static async loginThunkAction(login: ILogin): Promise<void> {
        const res = await AuthREST.login(login);
        Store.value.dispatch(AuthActions.setAuth(res));
    }

    private static async registerThunkAction(registerData: IRegister): Promise<IUser> {
        return await AuthREST.register(registerData);
    }

    private static async logoutThunkAction(): Promise<void> {
        await AuthREST.logout();
        Store.value.dispatch(AuthActions.clearAuth());
        Store.value.dispatch(AuthActions.clearToken());
    }

    private static async getTokenThunkAction(): Promise<string> {
        const res = await AuthREST.getToken();
        Store.value.dispatch(AuthActions.setToken(res));
        return res;
    }

    private static async getUserThunkAction(): Promise<void> {
        const res = await AuthREST.getUser();
        Store.value.dispatch(AuthActions.setAuth(res));
    }

    
    public static setAuth = createAction<IUser>(AuthActTypes.setAuth);
    
    public static setUserLoading = createAction<boolean>(AuthActTypes.setUserLoading);

    public static setTokenLoading = createAction<boolean>(AuthActTypes.setTokenLoading);

    public static clearAuth = createAction<void>(AuthActTypes.clearAuth);

    public static setToken = createAction<string>(AuthActTypes.setToken);

    public static clearToken = createAction<void>(AuthActTypes.clearToken);

    public static loginThunk = createAsyncThunk<void, ILogin>(AuthActTypes.loginThunk, AuthActions.loginThunkAction);

    public static registerThunk = createAsyncThunk<IUser, IRegister>(AuthActTypes.registerThunk, AuthActions.registerThunkAction);

    public static logoutThunk = createAsyncThunk<void, void>(AuthActTypes.logoutThunk, AuthActions.logoutThunkAction);

    public static getTokenThunk = createAsyncThunk<string, void>(AuthActTypes.getTokenThunk, AuthActions.getTokenThunkAction);

    public static getUserThunk = createAsyncThunk<void, void>(AuthActTypes.getUserThunk, AuthActions.getUserThunkAction);
}
