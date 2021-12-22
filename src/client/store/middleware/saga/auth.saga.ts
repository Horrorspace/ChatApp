import {Store} from '@store/Store';
import {MessagesSocket} from '@api/socket/messages.socket';
import {AuthActTypes} from '@store/types/AuthActTypes';
import {takeEvery} from 'redux-saga/effects'
// import {put} from 'redux-saga/effects';



export class AuthSaga {
    private static *tokenSaga() {
        const state = Store.value.getState();
        const token = state.Auth.token;
        if(token) {
            yield localStorage.setItem('token', token.access_token);
            yield MessagesSocket.refreshToken();
        }
    }

    public static *sagaWatcher() {
        yield takeEvery(AuthActTypes.setToken, AuthSaga.tokenSaga);
        yield takeEvery(AuthActTypes.getTokenThunk, AuthSaga.tokenSaga);
    }
}