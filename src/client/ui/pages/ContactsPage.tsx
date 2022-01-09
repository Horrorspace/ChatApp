import React, {useState} from 'react';
import {useHistory} from 'react-router'
import {ContactCards} from '@ui/components/contacts/ContactCards';
import {SearchField} from '@ui/components/contacts/SearchField';
import {btnClickHandler, clickHandler, clickHandlerVoid, inputChangeHandler} from '@aliases/ui';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions} from '@store/actions/AuthActions';
// import {MessagesActions} from '@store/actions/MessagesActions';
import {ContactsActions} from '@store/actions/ContactsActions';
import {IRootState} from '@interfaces/IStore';
import {IContactCardProps} from '@interfaces/IProps';
import {IUser} from '@interfaces/IUser';
import {IMessage} from '@interfaces/IMessage';
import { UsersRepository } from '@core/classes/UsersRepository';


interface IContactsPageState {
    settingsModalShow: boolean;
    addModalShow: boolean;
    userInput: string;
}

export const ContactsPage: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector<IRootState, IUser | null>(state => state.Auth.user);
    const users = useSelector<IRootState, IUser[]>(state => state.Users);
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

    const cards: IContactCardProps[] = messages.length > 0 ? contacts
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
        .sort((a, b) => b.timeOfLastMessage.getTime() - a.timeOfLastMessage.getTime())
        : [];
    
    const initialState: IContactsPageState = {
        settingsModalShow: false,
        addModalShow: false,
        userInput: '',
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

    const handleMyProfileClick: clickHandlerVoid =() => {
        dispatch(ContactsActions.setCurrentContact(user!));
        history.push('/profile');
        history.goForward();

    }

    const handleLogOut: clickHandlerVoid = () => {
        dispatch(AuthActions.logoutThunk());
    }

    const handleUserInputChange: inputChangeHandler = (e) => {
        if(e) {
            const target = e.target as HTMLInputElement;
            const value = target.value;
            setState(state => ({
                ...state,
                userInput: value
            }));
        }
    } 

    const handleAddUserOk: btnClickHandler = (e) => {
        const email = state.userInput;
        if(email.length > 0) {
            const usersRepository = new UsersRepository(users);
            const user = usersRepository.getUserByEmail(email);
            if(user) {
                dispatch(ContactsActions.setCurrentContact(user))
                setState(state => ({
                    ...state,
                    userInput: '',
                    addModalShow: false
                }));
                history.push('/chat');
                history.goForward();
            }
        }
    }

    return (
        <>
            <SearchField
                addModalShow={state.addModalShow}
                settingsModalShow={state.settingsModalShow}
                userInput={state.userInput}
                onSettingsBtnClick={handleSettingsBtnClick}
                onAddUserCancel={handleAddUserCancel}
                onAddUserBtnClick={handleAddUserBtnClick}
                onMyProfileClick={handleMyProfileClick}
                onLogOutClick={handleLogOut}
                onAddUserOk={handleAddUserOk}
                onUserInputChange={handleUserInputChange}
            />
            <ContactCards 
                cards={cards}
            />
        </>
    )
}