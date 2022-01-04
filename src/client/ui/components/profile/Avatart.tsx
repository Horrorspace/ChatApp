import React from 'react';
import {Row, Col, Image} from 'antd';
import {Chat} from '@lang/en/Chat';
import {IAvatarProps} from '@interfaces/IProps';
import {defAvatar} from '@config/defAvatar';



const Component: React.FC<IAvatarProps> = ({src}: IAvatarProps) => {    
    const avatar = src.length !== 0 ? src : defAvatar;
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
                    src={avatar}
                    alt={Chat.avatarAlt}
                    preview={false}
                    className="profile-avatar"
                />
            </Col>
        </Row>
    )
}

export const Avatart = React.memo(Component);
