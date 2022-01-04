import React, {} from 'react';
import {useSelector} from 'react-redux';
import {Chat} from '@lang/en/Chat';
import {Profile} from '@ui/components/profile/Profile';
import {ProfileMenu} from '@ui/components/profile/ProfileMenu';
import {IInfoFieldProps} from '@interfaces/IProps';
import {IRootState} from '@interfaces/IStore';
import {IUser} from '@interfaces/IUser';
import {InfoFields} from '@aliases/Profile';



export const ProfilePage: React.FC = () => {
    const contact = useSelector<IRootState, IUser>(state => state.Contacts.currentContact!);
    const usernameField: IInfoFieldProps = {
        title: `${Chat.username}:`,
        value: contact.username
    }
    const emailField: IInfoFieldProps = {
        title: `${Chat.email}:`,
        value: contact.email
    }
    const infoFields: InfoFields = [usernameField, emailField];

    
    return (
        <>
            <ProfileMenu />
            <Profile 
                src={contact.avatarSrc}
                infoFields={infoFields}
            />
        </>
    )
}
