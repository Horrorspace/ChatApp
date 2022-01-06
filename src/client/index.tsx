import '@styles/index.less';
import React from 'react';
import {render} from 'react-dom';
import {App} from '@ui/App';
import {Store} from '@store/Store';
import {AuthActions} from '@store/actions/AuthActions';
import {AuthREST} from '@api/REST/auth.rest';


// const user: ILogin = new LoginDto('tester3111@test.com', '1111');

async function start() {
    try {
        const user = await AuthREST.getUser();
        const token = await AuthREST.getToken();
        Store.start();
        if(user) {
            Store.value.dispatch(AuthActions.setAuth(user));
        }
        if(token) {
            Store.value.dispatch(AuthActions.setToken(token));
        }
        render(<App />, document.getElementById('root'));
    }
    catch(error) {
        console.error(error);
        Store.start();
        render(<App />, document.getElementById('root'));
    }
}

start();