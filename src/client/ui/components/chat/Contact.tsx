import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Row, Col, Image, Typography, Button, Dropdown, Menu} from 'antd';
import {MoreOutlined, ArrowLeftOutlined} from '@ant-design/icons';
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
            return `${Chat.lastSeen} ${lastOnline.getDate()}.${lastOnline.getMonth()}.${lastOnline.getFullYear()} at ${lastOnline.getHours()}:${lastOnline.getMinutes()}`
        }
        else {
            return Chat.offline
        }
    }
    const onlineStr = getOnlineStr(online, lastOnline);
    const {Title, Paragraph} = Typography;

    const [state, setState] = useState(false);
    
    const menu: React.ReactElement = (
        <Menu
            className="contact-menu-list"
        >
            <Menu.Item
               className="contact-menu-item__wrap" 
            >
                <Paragraph
                    className="contact-menu-item"
                >
                    {"test"}
                </Paragraph>
            </Menu.Item>
            <Menu.Item
               className="contact-menu-item__wrap" 
            >
                <Paragraph
                    className="contact-menu-item"
                >
                    {"test"}
                </Paragraph>
            </Menu.Item>
            <Menu.Item
               className="contact-menu-item__wrap" 
            >
                <Paragraph
                    className="contact-menu-item"
                >
                    {"test"}
                </Paragraph>
            </Menu.Item>
        </Menu>
    );

    return (
        <section
            className="contact__wrap"
        >
            <Row
                align="middle"
                justify="center"
                className="contact"
            >
                <Col
                    className="contact-back__wrap"
                >
                    <NavLink
                        to="/"
                    >
                        <Button
                            className="contact-setting__btn"
                        >
                            <ArrowLeftOutlined 
                                className="contact-setting__ico"
                            />
                        </Button>
                    </NavLink>
                </Col>
                <Col
                    className="contact-avatar__wrap"
                >
                    <Image 
                        src={avatarSrc}
                        alt={Chat.avatarAlt}

                        preview={false}
                        className="contact-avatar"
                    />
                </Col>
                <Col
                    className="contact-data"
                >
                    <NavLink
                        to="/profile"
                    >
                        <Row
                            align="middle"
                            justify="start"
                            className="contact-username__main-wrap"    
                        >
                            <Col
                                className="contact-username__wrap"
                            >
                                <Title 
                                    level={4}
                                    className="contact-username"
                                >
                                    {username}
                                </Title>
                            </Col>
                        </Row>
                        <Row
                            align="middle"
                            justify="start"
                            className="contact-online__main-wrap"
                        >
                            <Col
                                className="contact-online__wrap"
                            >
                                <Paragraph
                                    className="contact-online"
                                >
                                    {onlineStr}
                                </Paragraph>
                            </Col>
                        </Row>
                    </NavLink>
                </Col>
                <Col
                    className="contact-settings__wrap"
                >
                    <Button
                        className="contact-setting__btn"
                        onClick={() => {setState(p => !p)}}
                    >
                        <Dropdown
                            overlay={menu}
                            className="contact-setting__btn"
                            visible={state}
                        >
                            <MoreOutlined 
                                className="contact-setting__ico"
                            />
                        </Dropdown>
                    </Button>
                </Col>
            </Row>
        </section>
    )
}

export const Contact = React.memo(Component);
