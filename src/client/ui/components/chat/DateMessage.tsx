import React from 'react';
import {Typography} from 'antd';
import {IDateMessageProps} from '@interfaces/IProps';


const Component: React.FC<IDateMessageProps> = ({date}: IDateMessageProps) => {
    const {Title} = Typography
    const dayValue = date.getDate();
    const monthValue = date.getMonth() + 1;
    const yearValue = date.getFullYear();
    const day = dayValue > 9 ? `${dayValue}` : `0${dayValue}`;
    const month = monthValue > 9 ? `${monthValue}` : `0${monthValue}`;

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
                    {`${day}.${month}.${yearValue}`}
                </Title>
            </div>
        </div>
    )
}

export const DateMessage = React.memo(Component);