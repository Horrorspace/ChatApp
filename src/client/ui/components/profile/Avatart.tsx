import React from 'react';
import {Row, Col, Image} from 'antd';
import {Chat} from '@lang/en/Chat';
import {IAvatarProps} from '@interfaces/IProps';


const Component: React.FC<IAvatarProps> = ({src}: IAvatarProps) => {

    return (
        <Row
            align="middle"
            justify="center"
            className="profile-avatar__main-wrap" 
        >
            <Col
                className="profile-avatar__wrap"    
            >
                <Image 
                    src={src}
                    alt={Chat.avatarAlt}
                    preview={false}
                    className="profile-avatar"
                />
            </Col>
        </Row>
    )
}

export const Avatart = React.memo(Component);
