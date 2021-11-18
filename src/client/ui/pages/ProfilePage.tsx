import React from 'react';
import {Сhat} from '@lang/en/Сhat';
import {InfoList} from '@ui/components/profile/InfoList'
import {Avatart} from '@ui/components/profile/Avatart'
import {IInfoFieldProps} from '@interfaces/IProps';
import {InfoFields} from '@aliases/Profile';



export const ProfilePage: React.FC = () => {
    const avatarSrc: string = "https://sun9-76.userapi.com/impg/iIWIxmXrMksl12Z47tqfYqZl_0XLIGFyf4Shng/5anoVOOFRkY.jpg?size=1192x871&quality=96&sign=9437dcf14a264d0f1eb4efa06544eb8e&type=album"
    const username: string ="Just for lulz";
    const email: string = "justforlulz@google.com";
    const usernameField: IInfoFieldProps = {
        title: `${Сhat.username}:`,
        value: username
    }
    const emailField: IInfoFieldProps = {
        title: `${Сhat.email}:`,
        value: email
    }
    const infoFields: InfoFields = [usernameField, emailField];

    
    return (
        <>
            <Avatart 
                src={avatarSrc}
            />
            <InfoList 
                infoFields={infoFields}
            />
        </>
    )
}