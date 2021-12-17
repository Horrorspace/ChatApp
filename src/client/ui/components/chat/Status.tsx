import React from 'react';
import {CheckOutlined} from '@ant-design/icons';
import {IStatusProps} from '@interfaces/IProps';


const Component: React.FC<IStatusProps> = ({fromUser, readed}: IStatusProps) => {
    if(fromUser) {
        const className: string = readed ? "message-status_complete_dark" : "message-status_dark";
        
        return (
            <CheckOutlined 
                className={className}
            />
        )
    }
    else {
        return <></>
    }
}

export const Status = React.memo(Component);