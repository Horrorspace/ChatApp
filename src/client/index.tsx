import '@styles/index.less';
import React from 'react';
import {render} from 'react-dom';
import {App} from '@ui/App';
import {Store} from '@store/Store';
import {AuthActions} from '@store/actions/AuthActions';
import {MessagesActions} from '@store/actions/MessagesActions';
import {UsersActions} from '@store/actions/UsersActions';
import {AuthREST} from '@api/REST/auth.rest';
import {MessagesSocket} from '@api/socket/messages.socket';


// const user: ILogin = new LoginDto('tester3111@test.com', '1111');

async function start() {
    try {
        const user = await AuthREST.getUser();
        const token = await AuthREST.getToken();
        Store.start();
        Store.value.dispatch(AuthActions.setAuth(user));
        Store.value.dispatch(AuthActions.setToken(token));
        Store.value.dispatch(MessagesActions.getAllMessagesThunk());
        Store.value.dispatch(UsersActions.getUsersThunk());
        MessagesSocket.start();
        render(<App />, document.getElementById('root'));
    }
    catch(error) {
        console.error(error);
        render(<App />, document.getElementById('root'));
    }
}

start();