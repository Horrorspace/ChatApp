import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {AuthActTypes} from '@store/types/AuthActTypes';
import {IUser} from '@interfaces/IUser';


export class AuthActions {
    private static loginThunkAction() {}

    
    public static setAuth = createAction<IUser>(AuthActTypes.setAuth);

    public static loginThunk = createAsyncThunk<undefined>(MessagesActTypes.loginThunk, this.loginThunkAction);
}
