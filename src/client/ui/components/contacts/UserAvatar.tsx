import React from 'react';
import {Col, Image} from 'antd';
import {Chat} from '@lang/en/Chat';
import {IUserAvatarProps} from '@interfaces/IProps';


export const Component: React.FC<IUserAvatarProps> = ({lastMessagefromUser, userAvatarSrc}: IUserAvatarProps) => {
    if(lastMessagefromUser) {
        return (
                <Col
                    className="contact-card-user-avatar__wrap"
                >
                    <Image 
                        src={userAvatarSrc}
                        alt={Chat.avatarAlt}
                        preview={false}
                        className="contact-card-user-avatar"
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