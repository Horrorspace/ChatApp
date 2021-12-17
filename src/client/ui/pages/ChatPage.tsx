import React from 'react';
import {Messages} from '@ui/components/chat/Messages';
import {Contact} from '@ui/components/chat/Contact';
import {MessageEditor} from '@ui/components/chat/MessageEditor';
import {IMessage} from '@interfaces/IMessage';


export const ChatPage: React.FC = () => {
   const messages: IMessage[] = [
        {
            id: 1,
            text: 'One',
            fromUserId: 10,
            toUserId: 9,
            date: new Date('November 14, 2021 03:20:00'),
            readed: true
        },
        {
            id: 2,
            text: 'Two',
            fromUserId: 10,
            toUserId: 9,
            date: new Date('November 14, 2021 09:41:00'),
            readed: true
        },
        {
            id: 3,
            text: 'Three',
            fromUserId: 10,
            toUserId: 9,
            date: new Date('November 14, 2021 12:18:00'),
            readed: true
        },
        {
            id: 4,
            text: 'Four',
            fromUserId: 10,
            toUserId: 9,
            date: new Date('November 14, 2021 16:54:00'),
            readed: true
        },
        {
            id: 5,
            text: 'Five',
            fromUserId: 10,
            toUserId: 9,
            date: new Date('November 14, 2021 19:28:00'),
            readed: true
        },
        {
            id: 6,
            text: 'Six',
            fromUserId: 10,
            toUserId: 9,
            date: new Date('November 14, 2021 19:28:00'),
            readed: true
        },
        {
            id: 7,
            text: 'Seven \n Seven',
            fromUserId: 10,
            toUserId: 9,
            date: new Date('November 14, 2021 19:28:00'),
            readed: true
        },
        {
            id: 8,
            text: 'Eight \n Eight Eight \n Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight',
            fromUserId: 10,
            toUserId: 9,
            date: new Date('November 14, 2021 19:28:00'),
            readed: true
        },
    ]

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
            />
        </>
    )
}
