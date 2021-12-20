import '@styles/index.less';
import React from 'react';
import {render} from 'react-dom';
import {App} from '@ui/App';
import {UsersGql} from '@api/gql/users.gql';

UsersGql.getAllUsers().then(res => {
    console.log(res);
});

UsersGql.getUsers([10, 11]).then(res => {
    console.log(res);
});


render(<App />, document.getElementById('root'));