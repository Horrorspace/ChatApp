import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {AuthPage} from '@ui/pages/AuthPage';
import {RegisterPage} from '@ui/pages/RegisterPage';
import {ChatPage} from '@ui/pages/ChatPage';
import {ContactsPage} from '@ui/pages/ContactsPage';
import {ProfilePage} from '@ui/pages/ProfilePage';


export const useRoutes = (isLogined: boolean): React.ReactElement => {
    if(isLogined) {
        return (
            <Switch>
                <Route component={ContactsPage} path="/" exact />
                <Route component={ChatPage} path="/chat" exact />
                <Route component={ProfilePage} path="/profile" exact />
                <Redirect to="/" />
            </Switch>
        )
    }
    else {
        return (
            <Switch>
                <Route component={AuthPage} path="/login" exact />
                <Route component={RegisterPage} path="/register" exact />
                <Redirect to="/login" />
            </Switch>
        )
    }
}