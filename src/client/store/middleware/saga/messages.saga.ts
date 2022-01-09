import {Store} from '@store/Store';
import {IRootState} from '@interfaces/IStore';
import {MessagesActTypes} from '@store/types/MessagesActTypes';
import {ContactsActions} from '@store/actions/ContactsActions';
import {takeEvery, put} from 'redux-saga/effects';


export class MessagesSaga {
    private static *contactsSaga() {
        const state: IRootState = Store.value.getState();
        const user = state.Auth.user;
        if(user) {
            const ids: number[] = state.Messages.map(message => {
                if(message.fromUserId !== user.id) {
                    return message.fromUserId
                }
                else {
                    return message.toUserId
                }
            });
            yield put<any>(ContactsActions.getContactsThunk(ids));
        }
    }

    public static *sagaWatcher() {
        yield takeEvery(MessagesActTypes.setMessages, MessagesSaga.contactsSaga);
        yield takeEvery(MessagesActTypes.addMessage, MessagesSaga.contactsSaga);
        yield takeEvery(MessagesActTypes.deleteMessage, MessagesSaga.contactsSaga);
        yield takeEvery(MessagesActTypes.setReadMessage, MessagesSaga.contactsSaga);
    }
}