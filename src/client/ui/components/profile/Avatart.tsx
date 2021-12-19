import React from 'react';
import {Row, Col, Image} from 'antd';
import {Chat} from '@lang/en/Chat';
import {IAvatarProps} from '@interfaces/IProps';
import {useSelector, useDispatch} from 'react-redux';
import {AuthActions} from '@store/actions/AuthActions';


const Component: React.FC<IAvatarProps> = ({src}: IAvatarProps) => {
    const dispatch = useDispatch();
    const store = useSelector(state => state);
    console.log(store);
    
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
                    onClick={() => {
                        console.log(store);
                        dispatch(AuthActions.setToken('124215151'));
                    }}
                />
            </Col>
        </Row>
    )
}

export const Avatart = React.memo(Component);
