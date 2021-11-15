import React from 'react';
import {Card} from 'antd';
import {messageProps} from '@interfaces/IProps';


const Component: React.FC<messageProps> = ({text, time}: messageProps) => {
    const timeStr: string = time.toLocaleTimeString();

    return (
        <Card>
            <p>{text}</p>
            <p>{timeStr}</p>
        </Card>
    )
}

export const Message = React.memo(Component);