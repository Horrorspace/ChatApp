import React, { ReactElement } from 'react';
import {Row, Col, Image} from 'antd';
import {Сhat} from '@lang/en/Сhat';
import {contactCardProps} from '@interfaces/IProps';
import {userAvatar} from '@ui/element creators/userAvatar'


const Component: React.FC<contactCardProps> = ({
    username, 
    avatarSrc, 
    lastMessagefromUser, 
    userAvatarSrc, 
    timeOfLastMessage,
    lastMessage
}: contactCardProps) => {
    const userAvatarElement: ReactElement = userAvatar({lastMessagefromUser, userAvatarSrc});

    return (
        <Row>
            <Col>
                <Image 
                    src={avatarSrc}
                    alt={Сhat.avatarAlt}
                    width={40}
                    height={40}
                    preview={false}
                />
            </Col>
            <Col>
                <Row
                    align="middle"
                    justify='space-between'
                >
                    {username}
                </Row>
                <Row
                    align="middle"
                    justify="center"
                >
                    {userAvatarElement}
                    <Col>{lastMessage}</Col>
                </Row>
            </Col>
            <Col>
                {timeOfLastMessage.toLocaleTimeString()}
            </Col>
        </Row>
    )
}

export const ContactCard = React.memo(Component);