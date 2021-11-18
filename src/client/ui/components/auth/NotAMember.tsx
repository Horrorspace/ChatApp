import React from 'react';
import {Row, Col, Button, Typography} from 'antd';
import {Chat} from '@lang/en/Chat';


const Component: React.FC = () => {
    const {Title} = Typography;
    const title: string = `${Chat.notAMember}? ${Chat.signUp} ${Chat.now}:`;

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
                        {Chat.signUp}
                    </Button>
                </Col>
            </Row>
        </>
    )
}

export const NotAMember = React.memo(Component);