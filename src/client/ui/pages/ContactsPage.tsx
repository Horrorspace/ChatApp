import React, {useState} from 'react';
import {ContactCards} from '@ui/components/contacts/ContactCards';
import {SearchField} from '@ui/components/contacts/SearchField';
import {btnClickHandler, clickHandler, clickHandlerVoid} from '@aliases/ui';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions} from '@store/actions/AuthActions';
import {IRootState} from '@interfaces/IStore';
import {IContactCardProps} from '@interfaces/IProps';
import {IUser} from '@interfaces/IUser';
import {IMessage} from '@interfaces/IMessage';


interface IContactsPageState {
    settingsModalShow: boolean;
    addModalShow: boolean;
    cards: IContactCardProps[];
}

export const ContactsPage: React.FC = () => {
    const dispatch = useDispatch();
    const contacts = useSelector<IRootState, IUser[]>(state => state.Contacts.contacts);
    const messages = useSelector<IRootState, IMessage[]>(state => state.Messages);
    
    const initialState: IContactsPageState = {
        settingsModalShow: false,
        addModalShow: false,
        cards: []
    };
    const [state, setState] = useState(initialState);

    const handleSettingsBtnClick: btnClickHandler = () => {
        setState(prev => ({
            ...prev,
            settingsModalShow: !prev.settingsModalShow
        }));
    }

    const handleAddUserCancel: clickHandler = () => {
        setState(prev => ({
            ...prev,
            addModalShow: false
        }));
    }
    
    const handleAddUserBtnClick: btnClickHandler = () => {
        setState(prev => ({
            ...prev,
            addModalShow: !prev.settingsModalShow
        }));
    }

    const handleLogOut: clickHandlerVoid = () => {
        dispatch(AuthActions.logoutThunk())
    }

    const handleAddUserOk: btnClickHandler = (e) => {
        
    }

    return (
        <>
            <SearchField
                addModalShow={state.addModalShow}
                settingsModalShow={state.settingsModalShow} 
                onSettingsBtnClick={handleSettingsBtnClick}
                onAddUserCancel={handleAddUserCancel}
                onAddUserBtnClick={handleAddUserBtnClick}
                onLogOutClick={handleLogOut}
                onAddUserOk={handleAddUserOk}
            />
            <ContactCards 
                cards={state.cards}
            />
        </>
    )
}