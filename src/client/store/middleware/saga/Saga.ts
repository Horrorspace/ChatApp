import {fork} from 'redux-saga/effects';
import {AuthSaga} from '@store/middleware/saga/auth.saga';
import {MessagesSaga} from '@store/middleware/saga/messages.saga';
import createSagaMiddleware from 'redux-saga';


export class Saga {
    public static readonly saga = createSagaMiddleware();
    
    public static *rootSaga() {
        yield fork(AuthSaga.sagaWatcher);
        yield fork(MessagesSaga.sagaWatcher);
    }

    public static start() {
        Saga.saga.run(Saga.rootSaga);
    }
}