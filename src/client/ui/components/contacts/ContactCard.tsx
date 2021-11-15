import React from 'react';
import {Row, Col, Image} from 'antd';
import {Сhat} from '@lang/en/Сhat';
import {contactCardProps} from '@interfaces/IProps';
import {UserAvatar} from '@ui/components/contacts/UserAvatar'


const Component: React.FC<contactCardProps> = ({
    username, 
    avatarSrc, 
    lastMessagefromUser, 
    userAvatarSrc, 
    timeOfLastMessage,
    lastMessage
}: contactCardProps) => {
    return (
        <Row
            align="middle"
            justify="center"
        >
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
                    <UserAvatar
                        lastMessagefromUser={lastMessagefromUser}
                        userAvatarSrc={userAvatarSrc}                 
                    />
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