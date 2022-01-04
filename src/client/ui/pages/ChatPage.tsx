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

    const avatarSrc = "https://sun9-76.userapi.com/impg/iIWIxmXrMksl12Z47tqfYqZl_0XLIGFyf4Shng/5anoVOOFRkY.jpg?size=1192x871&quality=96&sign=9437dcf14a264d0f1eb4efa06544eb8e&type=album"
   
    return (
        <>
            <Contact 
                username="Just for lulz"
                avatarSrc={avatarSrc}
                online={false}
                lastOnline={new Date('November 14, 2021 19:28:00')}
            />
            <Messages 
                messages={messages}
                userId={10}
            />
            <MessageEditor
                text={state.text}
                onSendClicK={handleSend}
                onTextChange={handleInput}
            />
        </>
    )
}
