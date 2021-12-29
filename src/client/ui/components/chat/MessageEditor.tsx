import React from 'react';
import {Row, Col, Button, Input} from 'antd';
import {SendOutlined} from '@ant-design/icons';
import {Chat} from '@lang/en/Chat';
import {ISignInProps} from '@interfaces/IProps';


const Component: React.FC<ISignInProps> = ({onSendClicK, onTextChange}: ISignInProps) => { 
    return (
        <section
            className="message-editor__wrap_dark"
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
                        className="message-input_dark"
                        onChange={onTextChange}
                    />
                </Col>
                <Col
                    className="message-send-btn__wrap"
                >
                    <Button 
                        type="primary"
                        className="message-send-btn_dark"
                        onClick={onSendClicK}
                    >
                        <SendOutlined />
                    </Button>
                </Col>
            </Row>
        </section>

    )
}

export const MessageEditor = React.memo(Component);
