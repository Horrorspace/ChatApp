import React from 'react';
import {Layout} from 'antd';
// import {ChatPage} from '@ui/pages/ChatPage';
import {ContactsPage} from '@ui/pages/ContactsPage';
// import {ProfilePage} from '@ui/pages/ProfilePage';
// import {AuthPage} from '@ui/pages/AuthPage';
// import {RegisterPage} from '@ui/pages/RegisterPage';


const {Content} = Layout;


export const App: React.FC = () => {
    return (
        <Layout
            className="app"
        >
            <Content
                className="main"
            >
                <ContactsPage />
            </Content>
        </Layout>
    )
}