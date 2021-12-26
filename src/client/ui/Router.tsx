import React from 'react';
import {useRoutes} from '@ui/hooks/useRoutes';


export const Router: React.FC = () => {
    const routes: React.ReactElement = useRoutes(false);    
   
    return (
        <>
            {routes}
        </>
    )
}