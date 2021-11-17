import React from 'react';
import {Row} from 'antd';
import {Message} from '@ui/components/chat/Message';
import {IMessage} from '@interfaces/IMessage';
import {IMessagesProps} from '@interfaces/IProps';


const Component: React.FC<IMessagesProps> = ({messages}: IMessagesProps) => {  
   const messageProd = ({text, fromUser, time}: IMessage): React.ReactElement => {
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