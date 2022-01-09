import React from 'react';
import {IProfileMenuProps} from '@interfaces/IProps';
import {Row, Col, Button} from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';


const Component: React.FC<IProfileMenuProps> = ({onBackClick}: IProfileMenuProps) => {
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
                    <Button
                        className="profile-menu-btn_back"
                        onClick={onBackClick}
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
