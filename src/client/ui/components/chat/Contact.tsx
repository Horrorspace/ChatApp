import React from 'react';
import {Row, Col, Image, Typography} from 'antd';
import {Сhat} from '@lang/en/Сhat';
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
            return Сhat.online
        }
        else if(lastOnline) {
            return `${Сhat.lastSeen} ${lastOnline.toString()}`
        }
        else {
            return Сhat.offline
        }
    }
    const onlineStr = getOnlineStr(online, lastOnline);
    const {Title, Paragraph} = Typography;

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
    )
}

export const Contact = React.memo(Component);