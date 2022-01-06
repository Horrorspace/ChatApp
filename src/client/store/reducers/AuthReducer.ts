import {createReducer, ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {AuthRepository} from '@core/classes/AuthRepository';
import {IAuthState} from '@interfaces/IStore';
import {AuthDto} from '@core/dto/auth.dto';
import {AuthActions} from '@store/actions/AuthActions';

// export const initialState = 'asfsa';
// export const reducer = createReducer(initialState, builder => {
//     builder
//     .addCase(AuthActions.setAuth, (state, action) => {
        
//     })
// })


export class AuthReducer {
    private static readonly initialState: IAuthState = new AuthRepository(new AuthDto(null, null, false, false)).getAuth();

    private static buildReducer(builder: ActionReducerMapBuilder<IAuthState>): void {
        builder
            .addCase(AuthActions.setAuth, (state, action) => {
                const Auth = new AuthRepository(state);
                Auth.setUser(action.payload);
                Auth.setUserLoading(false);
                return Auth.getAuth();
            })
            .addCase(AuthActions.setUserLoading, (state, action) => {
                const Auth = new AuthRepository(state);
                Auth.setUserLoading(action.payload);
                return Auth.getAuth();
            })
            .addCase(AuthActions.setTokenLoading, (state, action) => {
                const Auth = new AuthRepository(state);
                Auth.setTokenLoading(action.payload);
                return Auth.getAuth();
            })
            .addCase(AuthActions.clearAuth, state => {
                const Auth = new AuthRepository(state);
                Auth.clearUser();
                return Auth.getAuth();
            })
            .addCase(AuthActions.setToken, (state, action) => {
                const Auth = new AuthRepository(state);
                Auth.setToken(action.payload);
                return Auth.getAuth();
            })
            .addCase(AuthActions.clearToken, state => {
                const Auth = new AuthRepository(state);
                Auth.clearToken();
                return Auth.getAuth();
            })
            .addCase(AuthActions.getTokenThunk.fulfilled, (state, action) => {
                const Auth = new AuthRepository(state);
                Auth.setToken(action.payload);
                Auth.setTokenLoading(false);
                return Auth.getAuth();
            })
            .addCase(AuthActions.getTokenThunk.rejected, (state, action) => {
                const Auth = new AuthRepository(state);
                Auth.setTokenLoading(false);
                return Auth.getAuth();
            })
            .addCase(AuthActions.getUserThunk.rejected, (state, action) => {
                const Auth = new AuthRepository(state);
                Auth.setUserLoading(false);
                return Auth.getAuth();
            });
    }
  
    public static reducer = createReducer(AuthReducer.initialState, AuthReducer.buildReducer)
}