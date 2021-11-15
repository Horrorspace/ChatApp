import React from 'react';
import {Row, Col, Button, Input} from 'antd';
import {SendOutlined} from '@ant-design/icons';
import {Сhat} from '@lang/en/Сhat';


const Component: React.FC = () => { 
    return (
        <Row
        align="middle"
        justify="center"
        >
            <Col>
                <Input 
                    placeholder={Сhat.messagePlaceholder}
                />
            </Col>
            <Col>
                <Button 
                    type="primary"
                >
                    {Сhat.send}
                    <SendOutlined />
                </Button>
            </Col>
        </Row>
    )
}

export const MessageEditor = React.memo(Component);