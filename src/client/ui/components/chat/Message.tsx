import React from 'react';
import {Card} from 'antd';

interface messageProps {
    text: string;
    time: Date;
}

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