import React from 'react';
import {Card, Typography} from 'antd';
import {IMessageProps} from '@interfaces/IProps';
import {Status} from '@ui/components/chat/Status'


const Component: React.FC<IMessageProps> = ({text, date, fromUserId, userId, readed}: IMessageProps) => {
    const fromUser: boolean = fromUserId !== userId;
    const hoursVal = date.getHours();
    const minutesVal = date.getMinutes();
    const minutes = minutesVal > 9 ? `${minutesVal}` : `0${minutesVal}`;
    const hours = hoursVal > 9 ? `${hoursVal}` : `0${hoursVal}`;
    const timeStr: string = `${hours}:${minutes}`;
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
                readed={readed}
            />
        </Card>
    )
}

export const Message = React.memo(Component);