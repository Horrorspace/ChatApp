import React from 'react';
import {Row, Col} from 'antd';
import {Message} from '@ui/components/chat/Message';
import {IMessage} from '@interfaces/IMessage';
import {IMessagesProps} from '@interfaces/IProps';


const Component: React.FC<IMessagesProps> = ({messages}: IMessagesProps) => {  
   const messageProd = ({text, fromUser, time}: IMessage): React.ReactElement => {
       return (
           <Row
            align="middle"
            justify={fromUser ? 'end' : 'start'}
            className="message-element-row"
           >
                <Col
                    className="message-element-column"
                >
                    <Message
                        text={text}
                        time={time}
                    />
                </Col>
           </Row>
       )
   }
   0
   const renderedMessages: React.ReactElement[] = messages.map(messageProd)


    return (
        <>
            <section
                className="message-list-wrap"
            >
                <div
                    className="message-list"
                >
                    {renderedMessages}
                </div>
            </section>
        </>
    )
}

export const Messages = React.memo(Component);