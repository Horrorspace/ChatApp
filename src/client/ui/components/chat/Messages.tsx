import React from 'react';
import {Row, Col} from 'antd';
import {Message} from '@ui/components/chat/Message';
import {IMessage} from '@interfaces/IMessage';
import {IMessagesProps} from '@interfaces/IProps';
import {DateMessage} from '@ui/components/chat/DateMessage'


const Component: React.FC<IMessagesProps> = ({messages, userId}: IMessagesProps) => {  
    const messageProd = ({text, fromUserId, date, readed, id}: IMessage): React.ReactElement => {
        const fromUser: boolean = fromUserId === userId;
        return (
           <Row
            align="middle"
            justify={fromUser ? 'end' : 'start'}
            className="message-element-row"
            key={id}
           >
                <Col
                    className="message-element-column"
                >
                    <Message
                        text={text}
                        date={date}
                        fromUserId={fromUserId}
                        userId={userId}
                        readed={readed}
                    />
                </Col>
           </Row>
       )
   }
   
   const renderedMessages: React.ReactElement[] = messages.map(messageProd)


    return (
        <>
            <section
                className="message-list-wrap"
            >
                <div
                    className="message-list"
                >
                    <DateMessage 
                        date={new Date('November 14, 2021 19:28:00')}
                    />
                    {renderedMessages}
                </div>
            </section>
        </>
    )
}

export const Messages = React.memo(Component);