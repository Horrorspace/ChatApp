import React from 'react';
import {Col, Image} from 'antd';
import {Сhat} from '@lang/en/Сhat';
import {IUserAvatarProps} from '@interfaces/IProps';


export const Component: React.FC<IUserAvatarProps> = ({lastMessagefromUser, userAvatarSrc}: IUserAvatarProps) => {
    if(lastMessagefromUser) {
        return (
                <Col>
                    <Image 
                        src={userAvatarSrc}
                        alt={Сhat.avatarAlt}
                        width={40}
                        height={40}
                        preview={false}
                    />
                </Col>
        )
    }
    else {
        return (
            <>
            </>
        )
    }
}

export const UserAvatar = React.memo(Component);