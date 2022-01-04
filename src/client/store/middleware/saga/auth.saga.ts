import {Store} from '@store/Store';
import {MessagesSocket} from '@api/socket/messages.socket';
import {AuthActTypes} from '@store/types/AuthActTypes';
import {AuthActions} from '@store/actions/AuthActions';
import {takeEvery, put} from 'redux-saga/effects';



export class AuthSaga {
    private static *tokenSaga() {
        const state = Store.value.getState();
        const token = state.Auth.token;
        if(token) {
            yield localStorage.setItem('token', token.access_token);
            yield MessagesSocket.refreshToken();
        }
    }

    private static *userLoadingSaga() {
        yield put(AuthActions.setUserLoading(true));
    }

    private static *tokenLoadingSaga() {
        yield put(AuthActions.setTokenLoading(true));
    }

    public static *sagaWatcher() {
        yield takeEvery(AuthActTypes.setToken, AuthSaga.tokenSaga);
        yield takeEvery(AuthActTypes.getTokenThunk, AuthSaga.tokenSaga);
        yield takeEvery(AuthActTypes.getUserThunk, AuthSaga.userLoadingSaga);
        yield takeEvery(AuthActTypes.getTokenThunk, AuthSaga.tokenLoadingSaga);
    }
}