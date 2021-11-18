import React from 'react';
import {Card, Typography} from 'antd';
import {IMessageProps} from '@interfaces/IProps';


const Component: React.FC<IMessageProps> = ({text, time}: IMessageProps) => {
    const timeStr: string = time.toLocaleTimeString();
    const {Paragraph} = Typography;

    return (
        <Card>
            <Paragraph>{text}</Paragraph>
            <Paragraph>{timeStr}</Paragraph>
        </Card>
    )
}

export const Message = React.memo(Component);