import React from 'react';
import {Layout} from 'antd';
import {ChatPage} from '@ui/pages/ChatPage';

const {Header, Content, Footer} = Layout;


export const App: React.FC = () => {
    return (
        <Layout>
            <Header></Header>
            <Content>
                <ChatPage />
            </Content>
            <Footer></Footer>
        </Layout>
    )
}