import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Chat} from '@lang/en/Chat';
import {Profile} from '@ui/components/profile/Profile';
import {ProfileMenu} from '@ui/components/profile/ProfileMenu';
import {IInfoFieldProps} from '@interfaces/IProps';
import {IRootState} from '@interfaces/IStore';
import {IUser} from '@interfaces/IUser';
import {InfoFields} from '@aliases/Profile';
import { clickHandlerVoid } from '@aliases/ui';



export const ProfilePage: React.FC = () => {
    const history = useHistory();
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

    const handleBackClick: clickHandlerVoid = () => {
        history.goBack();
    }

    
    return (
        <>
            <ProfileMenu 
                onBackClick={handleBackClick}
            />
            <Profile 
                src={contact.avatarSrc}
                infoFields={infoFields}
            />
        </>
    )
}
