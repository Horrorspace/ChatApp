import '@styles/index.less';
import React from 'react';
import {render} from 'react-dom';
import {App} from '@ui/App';
import {Store} from '@store/Store';
// import {ILogin} from '@interfaces/IAuth';
// import {LoginDto} from '@core/dto/login.dto';
import {AuthActions} from '@store/actions/AuthActions';
import {MessagesActions} from '@store/actions/MessagesActions';
import {AuthREST} from '@api/REST/auth.rest';
// import {UsersGql} from '@api/gql/users.gql';
// import {ApolloClient, InMemoryCache, gql} from '@apollo/client';
import {MessagesSocket} from '@api/socket/messages.socket';
// import {INewMessage} from '@interfaces/IMessage';


// const gqlClient = new ApolloClient({
//     uri: 'http://localhost:3007/graphql',
//     cache: new InMemoryCache()
// })

// const ids_test = {
//     ids: [10, 12]
// };

// gqlClient.query({
//     variables: {ids_test: ids_test},
//     query: gql`
//     query get($ids_test: IdsInput) {
//         usersById(options: $ids_test) {
//             id
//             online
//             avatarSrc
//             confirmed
//             username
//             email
//         }
//     }`
// }).then(res => {
//     console.log(res);
// })

// UsersGql.getAllUsers().then(res => {
//     console.log(res);
// });

// UsersGql.getUsers([10, 11]).then(res => {
//     console.log(res);
// });


// const testMessage: INewMessage = {
//     text: 'Hello hello',
//     toUserId: 12
// };

// MessagesSocket.start();
// MessagesSocket.sendMessage(testMessage);

// const user: ILogin = new LoginDto('tester3111@test.com', '1111');

// console.log(Store.value.getState());
// Store.value.dispatch(AuthActions.loginThunk(user));
// console.log(Store.value.getState());

async function start() {
    try {
        const user = await AuthREST.getUser();
        const token = await AuthREST.getToken();
        Store.start();
        Store.value.dispatch(AuthActions.setAuth(user));
        Store.value.dispatch(AuthActions.setToken(token));
        Store.value.dispatch(MessagesActions.getAllMessagesThunk());
        MessagesSocket.start();
        render(<App />, document.getElementById('root'));
    }
    catch(error) {
        console.error(error);
        render(<App />, document.getElementById('root'));
    }
}

start();