import React from 'react';
import {Provider} from 'react-redux';
import {Store} from '@store/Store';


export function withProvider(Component: React.FC): React.FC {

    return () => (
        <Provider store={Store.value}>
            <Component />
        </Provider>
    )
}