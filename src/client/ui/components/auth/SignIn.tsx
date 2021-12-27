import React from 'react';
import {Row, Col, Button, Divider} from 'antd';
import {Chat} from '@lang/en/Chat';
import {InputField} from '@ui/components/auth/InputField';
import {PassField} from '@ui/components/auth/PassField';
import {ISignInProps} from '@interfaces/IProps'


const Component: React.FC<ISignInProps> = ({
    login,
    password,
    onLoginChange, 
    onPasswordChange, 
    onSignInClick
}: ISignInProps) => {
    const userNameTitle: string = `${Chat.username} or ${Chat.email}:`;
    const userNamePlaceholder: string = 'user@site.com';

    const passTitle: string = `${Chat.password}:`;
    const passPlaceholder: string = 'password';
    const forgotPassTitle: string = `${Chat.forgot} ${Chat.password.trim()}?`;

    return (
        <section
            className="sign-in__wrap"
        >
            <div
                className="sign-in"
            >
                <Divider />
                <InputField 
                    title={userNameTitle}
                    placeholder={userNamePlaceholder}
                    value={login}
                    onChange={onLoginChange}
                />
                <PassField 
                    title={passTitle}
                    placeholder={passPlaceholder}
                    value={password}
                    forgotPassTitle={forgotPassTitle}
                    onChange={onPasswordChange}
                />
                <Row
                    align="middle"
                    justify="center"    
                >
                    <Col>
                        <Button
                            onClick={onSignInClick}    
                        >
                            {Chat.signIn}
                        </Button>
                    </Col>
                </Row>
                <Divider />
            </div>
        </section>
    )
}

export const SignIn = React.memo(Component);
