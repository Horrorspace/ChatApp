import React from 'react';
import {Row, Col, Button, Input} from 'antd';
import {SendOutlined} from '@ant-design/icons';
import {Chat} from '@lang/en/Chat';


const Component: React.FC = () => { 
    return (
        <section
            className="message-editor__wrap"
        >
            <Row
            align="middle"
            justify="center"
            className="message-editor"
            >
                <Col
                    className="message-input__wrap"
                >
                    <Input 
                        placeholder={Chat.messagePlaceholder}
                        className="message-input"
                    />
                </Col>
                <Col
                    className="message-send-btn__wrap"
                >
                    <Button 
                        type="primary"
                        className="message-send-btn"
                    >
                        <SendOutlined />
                    </Button>
                </Col>
            </Row>
        </section>

    )
}

export const MessageEditor = React.memo(Component);