import React from 'react';
import {Row, Col, Image, Typography} from 'antd';
import {Chat} from '@lang/en/Chat';
import {lastOnline} from '@aliases/Message';
import {IContactProps} from '@interfaces/IProps';



const Component: React.FC<IContactProps> = ({
    username,
    avatarSrc,
    online,
    lastOnline
}: IContactProps) => {
    const getOnlineStr = (online: boolean, lastOnline: lastOnline): string => {
        if(online){
            return Chat.online
        }
        else if(lastOnline) {
            return `${Chat.lastSeen} ${lastOnline.toString()}`
        }
        else {
            return Chat.offline
        }
    }
    const onlineStr = getOnlineStr(online, lastOnline);
    const {Title, Paragraph} = Typography;

    return (
        <section
            className="contact-wrap"
        >
            <Row
            align="middle"
            justify="center"
            className=""
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
                    <Row>
                        <Col>
                            <Title level={4}>{username}</Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Paragraph>{onlineStr}</Paragraph>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}

export const Contact = React.memo(Component);