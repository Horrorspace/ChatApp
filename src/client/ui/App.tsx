import React from 'react';
import {Layout} from 'antd';
// import {ChatPage} from '@ui/pages/ChatPage';
// import {ContactsPage} from '@ui/pages/ContactsPage';
import {ProfilePage} from '@ui/pages/ProfilePage';
// import {AuthPage} from '@ui/pages/AuthPage';
// import {RegisterPage} from '@ui/pages/RegisterPage';
import {Provider} from 'react-redux';
import {Store} from '@store/Store';


const {Content} = Layout;

export const App: React.FC = () => {
    // useEffect(() => {
    //     const login: ILogin = {
    //         email: "tester3111@test.com",
    //         password: "1111"
    //     }

    //     AuthREST.login(login)
    //         .then(res => {
    //             console.log(res)
    //         });
    // })
    
    return (
        <Provider store={Store.value}>
            <Layout
                className="app"
            >
                <Content
                    className="main"
                >
                    <ProfilePage />
                </Content>
            </Layout>
        </Provider>
    )
}
