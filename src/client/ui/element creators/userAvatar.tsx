import React from 'react';
import {Col, Image} from 'antd';
import {Сhat} from '@lang/en/Сhat';
import {ElementCreator} from '@aliases/ui';
import {userAvatarProps} from '@interfaces/IProps';


export const userAvatar: ElementCreator<userAvatarProps> = ({lastMessagefromUser, userAvatarSrc}: userAvatarProps) => {
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