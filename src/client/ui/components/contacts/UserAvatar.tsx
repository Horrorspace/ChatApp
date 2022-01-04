import React from 'react';
import {Col, Image} from 'antd';
import {Chat} from '@lang/en/Chat';
import {defAvatar} from '@config/defAvatar';
import {IUserAvatarProps} from '@interfaces/IProps';


export const Component: React.FC<IUserAvatarProps> = ({lastMessageFromUserId, userId, userAvatarSrc}: IUserAvatarProps) => {
    const lastMessagefromUser: boolean = lastMessageFromUserId !== userId;
    const avatar = userAvatarSrc.length !== 0 ? userAvatarSrc : defAvatar;
    
    if(lastMessagefromUser) {
        return (
                <Col
                    className="contact-card-user-avatar__wrap"
                >
                    <Image 
                        src={avatar}
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