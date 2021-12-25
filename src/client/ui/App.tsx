import React from 'react';
import {compose} from 'redux';
// import {ChatPage} from '@ui/pages/ChatPage';
// import {ContactsPage} from '@ui/pages/ContactsPage';
import {withContent} from '@ui/HOCs/withContent';
import {withProvider} from '@ui/HOCs/withProvider';
import {ProfilePage} from '@ui/pages/ProfilePage';
// import {AuthPage} from '@ui/pages/AuthPage';
// import {RegisterPage} from '@ui/pages/RegisterPage';


export const App: React.FC = () => {
    const Component = compose<React.FC>(
        withProvider,
        withContent
    )(ProfilePage)
    
   
    return (
        <>
            <Component />
        </>
    )
}
