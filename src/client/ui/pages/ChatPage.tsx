import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Messages} from '@ui/components/chat/Messages';
import {Contact} from '@ui/components/chat/Contact';
import {MessageEditor} from '@ui/components/chat/MessageEditor';
import {MessagesActions} from '@store/actions/MessagesActions';
import {NewMessageDto} from '@core/dto/new-message.dto';
import {IRootState} from '@interfaces/IStore';
import {IMessage, INewMessage} from '@interfaces/IMessage';
import {IUser} from '@interfaces/IUser';
import {inputChangeHandler, btnClickHandler} from '@aliases/ui';


interface IChatPageState {
    text: string;
}

function scroll() {
    const scrollWindow = document.querySelector(".message-list-wrap");
    if(scrollWindow) {
        scrollWindow.scrollTo(0, scrollWindow.scrollHeight - scrollWindow.clientHeight);
    }
}


export const ChatPage: React.FC = () => {
    useEffect(() => {
        scroll();
    })


    const dispatch = useDispatch();
    const contact = useSelector<IRootState, IUser>(state => state.Contacts.currentContact!);
    const allMessages = useSelector<IRootState, IMessage[]>(state => state.Messages);
    const messages = allMessages
        .filter(message => {
            const fromUser = message.fromUserId === contact.id;
            const toUser = message.toUserId === contact.id;
            return fromUser || toUser;
        })
        .map(message => ({
            ...message,
            date: new Date(message.date)
        }));
    

    const initialState: IChatPageState = {
        text: ''
    }
    const [state, setState] = useState(initialState);
   
    const handleSend: btnClickHandler = () => {
        const text = state.text;
        const toUserId = contact.id;
        if(text.length > 0) {
            const newMessage: INewMessage = new NewMessageDto(text, toUserId).getMessage();
            dispatch(MessagesActions.sendNewMessage(newMessage));
            setState(state => ({
                ...state,
                text: ''
            }))
        }
    }
    
    const handleInput: inputChangeHandler = (e) => {
        if(e) {
            const target = e.target as HTMLInputElement;
            const value = target.value;
            setState(state => ({
                ...state,
                text: value
            }));
        }
    }
  
    return (
        <>
            <Contact 
                username={contact.username}
                avatarSrc={contact.avatarSrc}
                online={contact.online}
                lastOnline={null}
            />
            <Messages 
                messages={messages}
                userId={contact.id}
            />
            <MessageEditor
                text={state.text}
                onSendClicK={handleSend}
                onTextChange={handleInput}
            />
        </>
    )
}
