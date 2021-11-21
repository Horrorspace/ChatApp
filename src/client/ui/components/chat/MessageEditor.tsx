import React from 'react';
import {Row, Col, Button, Input} from 'antd';
import {SendOutlined} from '@ant-design/icons';
import {Chat} from '@lang/en/Chat';


const Component: React.FC = () => { 
    return (
        <section
            className="message-editor-wrap"
        >
            <Row
            align="middle"
            justify="center"
            className=""
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
                        <SendOutlined />
                    </Button>
                </Col>
            </Row>
        </section>

    )
}

export const MessageEditor = React.memo(Component);