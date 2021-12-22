import {fork} from 'redux-saga/effects';
import {AuthSaga} from '@store/middleware/saga/auth.saga';
import createSagaMiddleware from 'redux-saga';


export class Saga {
    public static readonly saga = createSagaMiddleware();
    
    public static *rootSaga() {
        yield fork(AuthSaga.sagaWatcher);
    }

    public static start() {
        Saga.saga.run(Saga.rootSaga);
    }
}