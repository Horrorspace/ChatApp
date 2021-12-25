import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import {UsersActTypes} from '@store/types/UsersActTypes';
import {IUser} from '@interfaces/IUser';
import {UsersGql} from '@api/gql/users.gql';


export class UsersActions {
    private static async  getUsersThunkAction(): Promise<IUser[]> {
        return await UsersGql.getAllUsers();
    }
    

    public static setUsers = createAction<IUser[], UsersActTypes>(UsersActTypes.setUsers);

    public static getContactsThunk = createAsyncThunk<IUser[], void>(UsersActTypes.getUsersThunk, UsersActions.getUsersThunkAction);
}
