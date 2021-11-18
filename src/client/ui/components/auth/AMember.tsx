import React from 'react';
import {Row, Col, Button, Typography} from 'antd';
import {Chat} from '@lang/en/Chat';
import {IAMemberProps} from '@interfaces/IProps'


const Component: React.FC<IAMemberProps> = ({aMember}: IAMemberProps) => {
    const {Title} = Typography;

    const signInTitle: string = `${Chat.notAMember}? ${Chat.signUp} ${Chat.now}:`;
    const signUpTitle: string = `${Chat.alreadyAMember}? ${Chat.signIn}:`;
    const title: string = aMember ? signInTitle : signUpTitle;

    const signInButton: string = Chat.signUp;
    const signUpButton: string = Chat.signIn;
    const buttonText: string = aMember ? signInButton : signUpButton;

    return (
        <>
            <Row
                align="middle"
                justify="center" 
            >
                <Col>
                    <Title level={4}>{title}</Title>
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

export const AMember = React.memo(Component);