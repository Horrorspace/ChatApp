import React from 'react';
import {useSelector} from 'react-redux';
import {useRoutes} from '@ui/hooks/useRoutes';
import {IRootState} from '@interfaces/IStore';
import {LoadingPage} from '@ui/pages/LoadingPage';


export const Router: React.FC = () => {
    const loading = useSelector<IRootState>(state => state.Auth.loading);
    const user = useSelector<IRootState>(state => state.Auth.user);
    console.log(loading);
    console.log(user);
    const routes: React.ReactElement = useRoutes(Boolean(user));    

    if(loading) {
        return (
            <>
                <LoadingPage />
            </>
        )
    }
    else {
        return (
            <>
                {routes}
            </>
        )
    }
}
