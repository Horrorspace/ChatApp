import React from 'react';
import {NavLink} from 'react-router-dom';
import {Row, Col, Button} from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';


const Component: React.FC = () => {
    return (
        <section
            className="profile-menu__wrap"
        >
            <Row
                align="middle"
                justify="start"
                className="profile-menu"
            >
                <Col
                    className="profile-menu-btn_back__wrap"
                >
                    <NavLink
                        to="/chat"
                    >
                        <Button
                            className="profile-menu-btn_back"
                        >
                            <ArrowLeftOutlined 
                                className="profile-menu-back-ico"
                            />
                        </Button>
                    </NavLink>
                </Col>
            </Row>
        </section>
    )
}

export const ProfileMenu = React.memo(Component);
