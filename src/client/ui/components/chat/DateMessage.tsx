import React from 'react';
import {Typography} from 'antd';
import {IDateMessageProps} from '@interfaces/IProps';


const Component: React.FC<IDateMessageProps> = ({date}: IDateMessageProps) => {
    const {Title} = Typography

    return (
        <div
            className="message-date__main-wrap"
        >
            <div
                className="message-date__wrap"
            >
                <Title
                    level={5}
                    className="message-date"
                >
                    {`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}
                </Title>
            </div>
        </div>
    )
}

export const DateMessage = React.memo(Component);