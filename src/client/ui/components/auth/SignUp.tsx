import React from 'react';
import {Row, Col, Button, Divider} from 'antd';
import {Chat} from '@lang/en/Chat';
import {InputField} from '@ui/components/auth/InputField';
import {PassField} from '@ui/components/auth/PassField';
import {ISignUpProps} from '@interfaces/IProps';


const Component: React.FC<ISignUpProps> = ({
    username,
    email,
    password,
    onUsernameChange,
    onEmailChange,
    onPasswordChange,
    onSignUpClick
}: ISignUpProps) => {
    const userNameTitle: string = `${Chat.username}:`;
    const userNamePlaceholder: string = Chat.username.trim();

    const EmailTitle: string = `${Chat.email}:`;
    const EmailPlaceholder: string = 'user@site.com';

    const passTitle: string = `${Chat.password}:`;
    const passPlaceholder: string = 'password';

    return (
        <section
            className="sign-up__wrap"    
        >
            <div
                className="sign-up"    
            >
                <Divider />
                <InputField 
                    title={userNameTitle}
                    placeholder={userNamePlaceholder}
                    value={username}
                    onChange={onUsernameChange}
                />
                <InputField 
                    title={EmailTitle}
                    placeholder={EmailPlaceholder}
                    value={email}
                    onChange={onEmailChange}
                />
                <PassField 
                    title={passTitle}
                    placeholder={passPlaceholder}
                    value={password}
                    onChange={onPasswordChange}
                />
                <Row
                    align="middle"
                    justify="center"
                >
                    <Col>
                        <Button
                            onClick={onSignUpClick}
                        >
                            {Chat.createAccount}
                        </Button>
                    </Col>
                </Row>
                <Divider />
            </div>
        </section>
    )
}

export const SignUp = React.memo(Component);
