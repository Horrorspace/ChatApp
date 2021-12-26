import React from 'react';
import {Row, Col, Button, Typography} from 'antd';
import {GoogleOutlined} from '@ant-design/icons';
import {Chat} from '@lang/en/Chat';
import {IGoogleAuthProps} from '@interfaces/IProps'


const Component: React.FC<IGoogleAuthProps> = ({aMember}: IGoogleAuthProps) => {
    const {Title} = Typography;

    const signInTitle: string = `${Chat.signIn} ${Chat.withGoogle}:`;
    const signUpTitle: string = `${Chat.signUp} ${Chat.withGoogle}:`;
    const title: string = aMember ? signInTitle : signUpTitle;

    
    return (
        <section
            className="google-auth__wrap"
        >
            <div
                className="google-auth"
            >
                <Row
                    align="middle"
                    justify="center"
                    className="google-auth-title__wrap"
                >
                    <Col>
                        <Title level={4}
                            className="google-auth-title"
                        >
                            {title}
                        </Title>
                    </Col>
                </Row>
                <Row
                    align="middle"
                    justify="center"
                    className="google-auth-btn__wrap"
                >
                    <Col>
                        <Button
                            className="google-auth-btn"
                        >
                            <GoogleOutlined />
                        </Button>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export const GoogleAuth = React.memo(Component);