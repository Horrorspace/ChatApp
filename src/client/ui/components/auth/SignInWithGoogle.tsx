import React from 'react';
import {Row, Col, Button, Typography} from 'antd';
import {Chat} from '@lang/en/Chat';


const Component: React.FC = () => {
    const {Title} = Typography;
    
    return (
        <>
            <Row>
                <Col>
                    <Title level={4}>
                        {`${Chat.signIn} ${Chat.withGoogle}:`}
                    </Title>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>
                        {Chat.googleAuth}
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export const SignInWithGoogle = React.memo(Component);