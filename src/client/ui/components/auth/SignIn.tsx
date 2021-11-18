import React from 'react';
import {Row, Col, Button, Divider} from 'antd';
import {Chat} from '@lang/en/Chat';
import {InputField} from '@ui/components/auth/InputField';
import {PassField} from '@ui/components/auth/PassField';


const Component: React.FC = () => {
    const userNameTitle: string = `${Chat.username} or ${Chat.email}:`;
    const userNamePlaceholder: string = 'user@site.com';

    const passTitle: string = `${Chat.password}:`;
    const passPlaceholder: string = 'password';
    const forgotPassTitle: string = `${Chat.forgot} ${Chat.password.trim()}?`;

    return (
        <>
            <Divider />
            <InputField 
                title={userNameTitle}
                placeholder={userNamePlaceholder}
            />
            <PassField 
                title={passTitle}
                placeholder={passPlaceholder}
                forgotPassTitle={forgotPassTitle}
            />
            <Row>
                <Col>
                    <Button>
                        {Chat.signIn}
                    </Button>
                </Col>
            </Row>
            <Divider />
        </>
    )
}

export const SignIn = React.memo(Component);