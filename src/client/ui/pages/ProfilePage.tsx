import React from 'react';
import {Row, Image} from 'antd';
import {Сhat} from '@lang/en/Сhat';


export const ProfilePage: React.FC = () => {
    const avatarSrc: string = "https://sun9-76.userapi.com/impg/iIWIxmXrMksl12Z47tqfYqZl_0XLIGFyf4Shng/5anoVOOFRkY.jpg?size=1192x871&quality=96&sign=9437dcf14a264d0f1eb4efa06544eb8e&type=album"
    const username="Just for lulz";


    return (
        <>
            <Image 
                src={avatarSrc}
                alt={Сhat.avatarAlt}
                width={200}
                height={200}
                preview={false}
            />
            <Row
                align="middle"
                justify='space-between'
            >
                {""}
            </Row>
            <Row
                align="middle"
                justify='space-between'
            >
                {username}
            </Row>
        </>
    )
}