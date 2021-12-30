import React from 'react';
import {useSelector} from 'react-redux';
import {useRoutes} from '@ui/hooks/useRoutes';
import {IRootState} from '@interfaces/IStore';


export const Router: React.FC = () => {
    // const dispatch = useDispatch();
    const user = useSelector<IRootState>(state => state.Auth.user);
    
    const routes: React.ReactElement = useRoutes(Boolean(user));    
   
    return (
        <>
            {routes}
        </>
    )
}
