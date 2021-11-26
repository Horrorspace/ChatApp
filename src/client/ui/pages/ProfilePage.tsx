import React from 'react';
import {Chat} from '@lang/en/Chat';
import {InfoList} from '@ui/components/profile/InfoList';
import {Avatart} from '@ui/components/profile/Avatart';
import {ProfileMenu} from '@ui/components/profile/ProfileMenu';
import {IInfoFieldProps} from '@interfaces/IProps';
import {InfoFields} from '@aliases/Profile';



export const ProfilePage: React.FC = () => {
    const avatarSrc: string = "https://sun9-76.userapi.com/impg/iIWIxmXrMksl12Z47tqfYqZl_0XLIGFyf4Shng/5anoVOOFRkY.jpg?size=1192x871&quality=96&sign=9437dcf14a264d0f1eb4efa06544eb8e&type=album"
    const username: string ="Just for lulz";
    const email: string = "justforlulz@google.com";
    const usernameField: IInfoFieldProps = {
        title: `${Chat.username}:`,
        value: username
    }
    const emailField: IInfoFieldProps = {
        title: `${Chat.email}:`,
        value: email
    }
    const infoFields: InfoFields = [usernameField, emailField];

    
    return (
        <>
            <ProfileMenu />
            <Avatart 
                src={avatarSrc}
            />
            <InfoList 
                infoFields={infoFields}
            />
        </>
    )
}
