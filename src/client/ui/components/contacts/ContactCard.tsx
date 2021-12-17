import React from 'react';
import {Row, Col, Image, Typography} from 'antd';
import {Chat} from '@lang/en/Chat';
import {IContactCardProps} from '@interfaces/IProps';
import {UserAvatar} from '@ui/components/contacts/UserAvatar'


const Component: React.FC<IContactCardProps> = ({
    username, 
    avatarSrc, 
    lastMessageFromUserId,
    userId,
    userAvatarSrc, 
    timeOfLastMessage,
    lastMessage
}: IContactCardProps) => {
    const {Title, Paragraph} = Typography;
    
    return (
        <Row
            align="middle"
            justify="center"
            className="contact-card_dark"
        >
            <Col
                className="contact-card-avatar__wrap"
            >
                <Image 
                    src={avatarSrc}
                    alt={Chat.avatarAlt}
                    preview={false}
                    className="contact-card-avatar"
                />
            </Col>
            <Col
                className="contact-card-main-data"
            >
                <Row
                    align="middle"
                    justify="start"
                    className="contact-card-username__main-wrap"
                >
                    <Col
                        className="contact-card-username__wrap"
                    >
                        <Title 
                            level={4}
                            className="contact-card-username_dark"
                        >
                            {username}
                        </Title>
                    </Col>  
                </Row>
                <Row
                    align="middle"
                    justify="start"
                    className="contact-card-last-message__main-wrap"
                >
                    <UserAvatar
                        lastMessageFromUserId={lastMessageFromUserId}
                        userId={userId}
                        userAvatarSrc={userAvatarSrc}                 
                    />
                    <Col
                        className="contact-card-last-message__wrap"
                    >
                        <Paragraph
                            className="contact-card-last-message_dark"
                        >
                            {lastMessage}
                        </Paragraph>
                    </Col>
                </Row>
            </Col>
            <Col
                className="contact-card-date__wrap"
            >
                <Paragraph
                    className="contact-card-date_dark"
                >
                    {timeOfLastMessage.toLocaleTimeString()}
                </Paragraph>
            </Col>
        </Row>
    )
}

export const ContactCard = React.memo(Component);