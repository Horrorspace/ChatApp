import {createReducer, ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {UsersActions} from '@store/actions/UsersActions';
import {IUser} from '@interfaces/IUser';



export class UsersReducer {
    private static readonly initialState: IUser[] = [];

    private static buildReducer(builder: ActionReducerMapBuilder<IUser[]>): void {
        builder
            .addCase(UsersActions.setUsers, (state, action) => {
                return action.payload;
            })
            .addCase(UsersActions.getUsersThunk.fulfilled, (state, action) => {
                return action.payload;
            });
    }

    public static reducer = createReducer(UsersReducer.initialState, UsersReducer.buildReducer);
}
