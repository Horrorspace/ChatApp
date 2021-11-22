import React from 'react';
import {CheckOutlined} from '@ant-design/icons';
import {IStatusProps} from '@interfaces/IProps';


const Component: React.FC<IStatusProps> = ({fromUser, read}: IStatusProps) => {
    if(fromUser) {
        const className: string = read ? "message-status_complete_dark" : "message-status_dark";
        
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