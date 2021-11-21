import React from 'react';
import {Messages} from '@ui/components/chat/Messages';
import {Contact} from '@ui/components/chat/Contact';
import {MessageEditor} from '@ui/components/chat/MessageEditor';
import {IMessage} from '@interfaces/IMessage';


export const ChatPage: React.FC = () => {
   const messages: IMessage[] = [
        {
            text: 'One',
            fromUser: true,
            time: new Date('November 14, 2021 03:20:00')
        },
        {
            text: 'Two',
            fromUser: true,
            time: new Date('November 14, 2021 09:41:00')
        },
        {
            text: 'Three',
            fromUser: false,
            time: new Date('November 14, 2021 12:18:00')
        },
        {
            text: 'Four',
            fromUser: true,
            time: new Date('November 14, 2021 16:54:00')
        },
        {
            text: 'Five',
            fromUser: false,
            time: new Date('November 14, 2021 19:28:00')
        },
        {
            text: 'Six',
            fromUser: true,
            time: new Date('November 14, 2021 19:28:00')
        },
        {
            text: 'Seven \n Seven',
            fromUser: false,
            time: new Date('November 14, 2021 19:28:00')
        },
        {
            text: 'Eight \n Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight Eight',
            fromUser: true,
            time: new Date('November 14, 2021 19:28:00')
        },
    ]

    const avatarSrc = "https://sun9-76.userapi.com/impg/iIWIxmXrMksl12Z47tqfYqZl_0XLIGFyf4Shng/5anoVOOFRkY.jpg?size=1192x871&quality=96&sign=9437dcf14a264d0f1eb4efa06544eb8e&type=album"
   
    return (
        <>
            <Contact 
                username="Just for lulz"
                avatarSrc={avatarSrc}
                online={true}
                lastOnline={null}
            />
            <Messages 
                messages={messages}
            />
            <MessageEditor 
            />
        </>
    )
}
