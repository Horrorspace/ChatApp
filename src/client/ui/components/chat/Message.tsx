import React from 'react';
import {Card, Typography} from 'antd';
import {IMessageProps} from '@interfaces/IProps';


const Component: React.FC<IMessageProps> = ({text, time}: IMessageProps) => {
    const timeStr: string = `${time.getHours()}:${time.getMinutes()}`;
    const {Paragraph} = Typography;

    return (
        <Card
            className="message-element"
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
        </Card>
    )
}

export const Message = React.memo(Component);