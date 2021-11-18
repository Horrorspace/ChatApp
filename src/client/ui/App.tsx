import React from 'react';
import {Layout} from 'antd';
// import {ChatPage} from '@ui/pages/ChatPage';
// import {ContactsPage} from '@ui/pages/ContactsPage';
// import {ProfilePage} from '@ui/pages/ProfilePage';
// import {AuthPage} from '@ui/pages/AuthPage';
import {RegisterPage} from '@ui/pages/RegisterPage';


const {Header, Content, Footer} = Layout;


export const App: React.FC = () => {
    return (
        <Layout>
            <Header></Header>
            <Content>
                <RegisterPage />
            </Content>
            <Footer></Footer>
        </Layout>
    )
}