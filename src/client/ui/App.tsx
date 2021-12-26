import React from 'react';
import {compose} from 'redux';
import {withContent} from '@ui/HOCs/withContent';
import {withProvider} from '@ui/HOCs/withProvider';
import {withRouter} from '@ui/HOCs/withRouter';
import {Router} from '@ui/Router';


export const App: React.FC = () => {
    const Component = compose<React.FC>(
        withProvider,
        withContent,
        withRouter
    )(Router)
    
   
    return (
        <>
            <Component />
        </>
    )
}
