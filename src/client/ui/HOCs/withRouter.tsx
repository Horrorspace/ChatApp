import React from 'react';
import {BrowserRouter} from 'react-router-dom';


export function withRouter(Component: React.FC): React.FC {

    return () => (
        <BrowserRouter>
            <Component />
        </BrowserRouter>
    )
}