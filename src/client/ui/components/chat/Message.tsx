import React from 'react';
import {Card} from 'antd';
import {IMessageProps} from '@interfaces/IProps';


const Component: React.FC<IMessageProps> = ({text, time}: IMessageProps) => {
    const timeStr: string = time.toLocaleTimeString();

    return (
        <Card>
            <p>{text}</p>
            <p>{timeStr}</p>
        </Card>
    )
}

export const Message = React.memo(Component);