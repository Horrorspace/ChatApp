import React from 'react';
import {Layout} from 'antd';


export function withContent(Component: React.FC): React.FC {
    const {Content} = Layout;

    return () => (
        <Layout
            className="app"
        >
            <Content
                className="main"
            >
                <Component />
            </Content>
        </Layout>
    )
}