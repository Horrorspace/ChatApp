import {configureStore} from '@reduxjs/toolkit';
// import {createStore} from 'redux';
import {AuthReducer} from '@store/reducers/AuthReducer';
// import thunk from 'redux-thunk'

export const store = configureStore({
    reducer: AuthReducer.reducer
});

export class Store {
    public static readonly value = configureStore({
        reducer: AuthReducer.reducer
    });
}

// const middleware = [thunk];
// const Middleware = applyMiddleware(...middleware);

// export const store = configureStore({
//     reducer: AuthReducer.reducer
// });