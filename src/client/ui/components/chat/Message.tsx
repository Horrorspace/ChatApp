import React from 'react';
import {Card, Typography} from 'antd';
import {IMessageProps} from '@interfaces/IProps';
import {Status} from '@ui/components/chat/Status'


const Component: React.FC<IMessageProps> = ({text, time, fromUser, read}: IMessageProps) => {
    const timeStr: string = `${time.getHours()}:${time.getMinutes()}`;
    const elementClassName: string = fromUser ? "message-element_from-user" : "message-element";
    const {Paragraph} = Typography;

    return (
        <Card
            className={elementClassName}
            hoverable={true}
        >
            <Paragraph
                className="message"
            >
                {text}
            </Paragraph>
            <Paragraph
                className="message-time"
            >
                {timeStr}
            </Paragraph>
            <Status 
                fromUser={fromUser}
                read={read}
            />
        </Card>
    )
}

export const Message = React.memo(Component);