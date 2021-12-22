import {Saga} from '@store/middleware/saga/Saga';
import {CurriedGetDefaultMiddleware} from '@reduxjs/toolkit/dist/getDefaultMiddleware';


export class Middleware {
    private static middlewareList = [Saga.saga];

    public static middleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) => getDefaultMiddleware().concat(Middleware.middlewareList);

    public static start() {
        Saga.start();
    }
}