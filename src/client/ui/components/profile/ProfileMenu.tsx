import React from 'react';
import {Row, Col, Button} from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';


const Component: React.FC<IInfoFieldProps> = ({title, value}: IInfoFieldProps) => {
    return (
        <section
            className="profile-menu__wrap"
        >
            <Row
                align="middle"
                justify="center"
                className="profile-menu"
            >
                <Col
                    className="profile-menu-btn_back__wrap"
                >
                    <Button
                        className="profile-menu-btn_back"
                    >
                        <ArrowLeftOutlined 
                            className="profile-menu-back-ico"
                        />
                    </Button>
                </Col>
            </Row>
        </section>
    )
}

export const ProfileMenu = React.memo(Component);
