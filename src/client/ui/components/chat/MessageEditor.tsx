import React from 'react';
import {Row, Col, Button, Input} from 'antd';
import {SendOutlined} from '@ant-design/icons';
import {Chat} from '@lang/en/Chat';


const Component: React.FC = () => { 
    return (
        <Row
        align="middle"
        justify="center"
        >
            <Col>
                <Input 
                    placeholder={Chat.messagePlaceholder}
                />
            </Col>
            <Col>
                <Button 
                    type="primary"
                >
                    {Chat.send}
                    <SendOutlined />
                </Button>
            </Col>
        </Row>
    )
}

export const MessageEditor = React.memo(Component);