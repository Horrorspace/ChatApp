import React from 'react';
import {Row} from 'antd';
import {Message} from '@ui/components/chat/Message';
import {message} from '@interfaces/IMessage';
import {messagesProps} from '@interfaces/IProps';


const Component: React.FC<messagesProps> = ({messages}: messagesProps) => {  
   const messageProd = ({text, fromUser, time}: message): React.ReactElement => {
       return (
           <Row
            align="middle"
            justify={fromUser ? 'end' : 'start'}
           >
               <Message
                text={text}
                time={time}
               />
           </Row>
       )
   }
   
   const renderedMessages: React.ReactElement[] = messages.map(messageProd)


    return (
        <>
            {renderedMessages}
        </>
    )
}

export const Messages = React.memo(Component);