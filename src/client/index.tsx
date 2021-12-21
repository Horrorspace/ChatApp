import '@styles/index.less';
import React from 'react';
import {render} from 'react-dom';
import {App} from '@ui/App';
import {UsersGql} from '@api/gql/users.gql';
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

const gqlClient = new ApolloClient({
    uri: 'http://localhost:3007/graphql',
    cache: new InMemoryCache()
})

const ids_test = {
    ids: [10, 12]
};

gqlClient.query({
    variables: {ids_test: ids_test},
    query: gql`
    query get($ids_test: IdsInput) {
        usersById(options: $ids_test) {
            id
            online
            avatarSrc
            confirmed
            username
            email
        }
    }`
}).then(res => {
    console.log(res);
})

UsersGql.getAllUsers().then(res => {
    console.log(res);
});

UsersGql.getUsers([10, 11]).then(res => {
    console.log(res);
});


render(<App />, document.getElementById('root'));
