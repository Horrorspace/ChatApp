import React from 'react';
import {Row, Col, Image} from 'antd';
import {Сhat} from '@lang/en/Сhat';
import {IAvatarProps} from '@interfaces/IProps';


const Component: React.FC<IAvatarProps> = ({src}: IAvatarProps) => {

    return (
        <Row
            align="middle"
            justify="center"    
        >
            <Col>
                <Image 
                    src={src}
                    alt={Сhat.avatarAlt}
                    width={200}
                    height={200}
                    preview={false}
                />
            </Col>
        </Row>
    )
}

export const Avatart = React.memo(Component);