import React, {} from 'react';
import {useSelector} from 'react-redux';
import {Chat} from '@lang/en/Chat';
import {Profile} from '@ui/components/profile/Profile';
import {ProfileMenu} from '@ui/components/profile/ProfileMenu';
import {IInfoFieldProps} from '@interfaces/IProps';
import {IRootState} from '@interfaces/IStore';
import {InfoFields} from '@aliases/Profile';
// import {ILogin} from '@interfaces/IAuth';



export const ProfilePage: React.FC = () => {
    const store = useSelector((state: IRootState): IRootState => state);
    console.log(store.Contacts.contacts);

    
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
            <Profile 
                src={avatarSrc}
                infoFields={infoFields}
            />
        </>
    )
}
