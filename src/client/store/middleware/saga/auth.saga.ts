import {Store} from '@store/Store';
import {MessagesSocket} from '@api/socket/messages.socket';
import {AuthActTypes} from '@store/types/AuthActTypes';
import {AuthActions} from '@store/actions/AuthActions';
import {UsersActions} from '@store/actions/UsersActions';
import {MessagesActions} from '@store/actions/MessagesActions';
import {ContactsActions} from '@store/actions/ContactsActions';
import {takeEvery, put, call} from 'redux-saga/effects';



export class AuthSaga {
    private static *loginSaga() {
        yield call(console.log, 'setAuth');
        yield put<any>(AuthActions.getTokenThunk());
        yield MessagesSocket.start();
    }

    private static *logoutSaga() {
        yield call(console.log, 'clearAuth');
        yield MessagesSocket.stop();
        yield put(AuthActions.clearToken());
        yield localStorage.setItem('token', '');
        const token = localStorage.getItem('token');
        yield call(console.log, token);
        yield put(MessagesActions.setMessages([]));
        yield put(ContactsActions.setContacts([]));
    }

    private static *tokenSaga() {
        yield call(console.log, 'setToken');
        const state = Store.value.getState();
        const token = state.Auth.token;
        console.log(localStorage.getItem('token'));
        console.log(token);
        if(token) {
            yield localStorage.setItem('token', token.access_token);
            const token1 = localStorage.getItem('token');
            yield call(console.log, token1);
            yield MessagesSocket.refreshToken();
            yield put<any>(UsersActions.getUsersThunk());
            yield put<any>(MessagesActions.getAllMessagesThunk());
        }
    }

    private static *userLoadingSaga() {
        yield put(AuthActions.setUserLoading(true));
    }

    private static *tokenLoadingSaga() {
        yield put(AuthActions.setTokenLoading(true));
    }

    public static *sagaWatcher() {
        yield call(console.log, 'sagaWatcher'); 
        yield takeEvery(AuthActTypes.setToken, AuthSaga.tokenSaga);
        yield takeEvery(AuthActTypes.getTokenThunk, AuthSaga.tokenSaga);
        yield takeEvery(AuthActTypes.getUserThunk, AuthSaga.userLoadingSaga);
        yield takeEvery(AuthActTypes.getTokenThunk, AuthSaga.tokenLoadingSaga);
        yield takeEvery(AuthActTypes.setAuth, AuthSaga.loginSaga);
        yield takeEvery(AuthActTypes.clearAuth, AuthSaga.logoutSaga);
    }
}