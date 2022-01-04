import React, {useState} from 'react';
import {ContactCards} from '@ui/components/contacts/ContactCards';
import {SearchField} from '@ui/components/contacts/SearchField';
import {btnClickHandler, clickHandler, clickHandlerVoid} from '@aliases/ui';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions} from '@store/actions/AuthActions';
// import {MessagesActions} from '@store/actions/MessagesActions';
import {ContactsActions} from '@store/actions/ContactsActions';
import {IRootState} from '@interfaces/IStore';
import {IContactCardProps} from '@interfaces/IProps';
import {IUser} from '@interfaces/IUser';
import {IMessage} from '@interfaces/IMessage';


interface IContactsPageState {
    settingsModalShow: boolean;
    addModalShow: boolean;
}

export const ContactsPage: React.FC = () => {
    const dispatch = useDispatch();

    // useEffect(() => {dispatch(MessagesActions.getAllMessagesThunk());}, []);

    const user = useSelector<IRootState, IUser | null>(state => state.Auth.user);
    const contacts = useSelector<IRootState, IUser[]>(state => state.Contacts.contacts);
    const messages = useSelector<IRootState, IMessage[]>(state => state.Messages);
    const getLastMessage = (userId: number): IMessage => {
        const messageList = messages.filter(message => {
            const fromUser: boolean = message.fromUserId === userId;
            const toUser: boolean = message.toUserId === userId;
            return fromUser || toUser;
        });
        const lastIndex: number = messageList.length - 1;
        return messageList[lastIndex];
    };

    const cards: IContactCardProps[] = contacts
        .map(contact => ({
            username: contact.username,
            avatarSrc: contact.avatarSrc,
            online: contact.online,
            userId: contact.id,
            lastMessageFromUserId: getLastMessage(contact.id).fromUserId,
            userAvatarSrc: user!.avatarSrc,
            lastMessage: getLastMessage(contact.id).text,
            timeOfLastMessage: new Date(getLastMessage(contact.id).date),
            onClick: () => { 
                dispatch(ContactsActions.setCurrentContact(contact));
            }
        }))
        .sort((a, b) => b.timeOfLastMessage.getTime() - a.timeOfLastMessage.getTime());
    
    const initialState: IContactsPageState = {
        settingsModalShow: false,
        addModalShow: false,
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
                cards={cards}
            />
        </>
    )
}