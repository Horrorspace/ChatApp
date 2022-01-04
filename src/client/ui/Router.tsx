import React from 'react';
import {useSelector} from 'react-redux';
import {useRoutes} from '@ui/hooks/useRoutes';
import {IRootState} from '@interfaces/IStore';
import {LoadingPage} from '@ui/pages/LoadingPage';


export const Router: React.FC = () => {
    const userLoading = useSelector<IRootState, boolean>(state => state.Auth.userLoading);
    const tokenLoading = useSelector<IRootState, boolean>(state => state.Auth.tokenLoading);
    const loading: boolean = userLoading || tokenLoading;
    const user = useSelector<IRootState>(state => state.Auth.user);
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
