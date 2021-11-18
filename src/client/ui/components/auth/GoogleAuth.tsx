import React from 'react';
import {Row, Col, Button, Typography} from 'antd';
import {Chat} from '@lang/en/Chat';
import {IGoogleAuthProps} from '@interfaces/IProps'


const Component: React.FC<IGoogleAuthProps> = ({aMember}: IGoogleAuthProps) => {
    const {Title} = Typography;

    const signInTitle: string = `${Chat.signIn} ${Chat.withGoogle}:`;
    const signUpTitle: string = `${Chat.signIn} ${Chat.withGoogle}:`;
    const title: string = aMember ? signInTitle : signUpTitle;

    const signInButton: string = Chat.googleAuth;
    const signUpButton: string = Chat.googleAuth;
    const buttonText: string = aMember ? signInButton : signUpButton;
    
    return (
        <>
            <Row
                align="middle"
                justify="center"    
            >
                <Col>
                    <Title level={4}>
                        {title}
                    </Title>
                </Col>
            </Row>
            <Row
                align="middle"
                justify="center"
            >
                <Col>
                    <Button>
                        {buttonText}
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export const GoogleAuth = React.memo(Component);