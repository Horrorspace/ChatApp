import React from 'react';
import {Row, Col, Image, Typography} from 'antd';
import {Chat} from '@lang/en/Chat';
import {IContactCardProps} from '@interfaces/IProps';
import {UserAvatar} from '@ui/components/contacts/UserAvatar'


const Component: React.FC<IContactCardProps> = ({
    username, 
    avatarSrc, 
    lastMessagefromUser, 
    userAvatarSrc, 
    timeOfLastMessage,
    lastMessage
}: IContactCardProps) => {
    const {Title, Paragraph} = Typography;
    
    return (
        <Row
            align="middle"
            justify="center"
            className="contact-card"
        >
            <Col>
                <Image 
                    src={avatarSrc}
                    alt={Chat.avatarAlt}
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
                    <Col>
                        <Title level={4}>{username}</Title>
                    </Col>  
                </Row>
                <Row
                    align="middle"
                    justify="center"
                >
                    <UserAvatar
                        lastMessagefromUser={lastMessagefromUser}
                        userAvatarSrc={userAvatarSrc}                 
                    />
                    <Col>
                        <Paragraph>{lastMessage}</Paragraph>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Paragraph>{timeOfLastMessage.toLocaleTimeString()}</Paragraph>
            </Col>
        </Row>
    )
}

export const ContactCard = React.memo(Component);