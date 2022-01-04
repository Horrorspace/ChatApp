import React from 'react';
import {Row, Col, Button, Input} from 'antd';
import {SendOutlined} from '@ant-design/icons';
import {Chat} from '@lang/en/Chat';
import {IMessageEditorProps} from '@interfaces/IProps';


const Component: React.FC<IMessageEditorProps> = ({
    text,
    onSendClicK, 
    onTextChange
}: IMessageEditorProps) => { 
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
                        onChange={onTextChange}
                        value={text}
                    />
                </Col>
                <Col
                    className="message-send-btn__wrap"
                >
                    <Button 
                        type="primary"
                        className="message-send-btn"
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
