import React from 'react';
import {Layout} from 'antd';
// import {ChatPage} from '@ui/pages/ChatPage';
import {ContactsPage} from '@ui/pages/ContactsPage';


const {Header, Content, Footer} = Layout;


export const App: React.FC = () => {
    return (
        <Layout>
            <Header></Header>
            <Content>
                <ContactsPage />
            </Content>
            <Footer></Footer>
        </Layout>
    )
}