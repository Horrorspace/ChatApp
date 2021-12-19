import '@styles/index.less';
import React from 'react';
import {render} from 'react-dom';
import {App} from '@ui/App';
import {ApolloClient, InMemoryCache, gql} from '@apollo/client';

const gqlClient = new ApolloClient({
    uri: 'http://localhost:3007/graphql',
    cache: new InMemoryCache()
})


gqlClient.query({
    query: gql`
    query get {
        users {
            id
            confirmed
            username
        }
    }`
}).then(res => {
    console.log(res);
})

render(<App />, document.getElementById('root'));