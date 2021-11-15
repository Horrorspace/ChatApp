import React from 'react';
import {ContactCard} from '@ui/components/contacts/ContactCard'



export const ContactsPage: React.FC = () => {
    
    
    const avatarSrc = "https://sun9-76.userapi.com/impg/iIWIxmXrMksl12Z47tqfYqZl_0XLIGFyf4Shng/5anoVOOFRkY.jpg?size=1192x871&quality=96&sign=9437dcf14a264d0f1eb4efa06544eb8e&type=album"
    
    return (
        <>
            <ContactCard 
                username="Just for lulz"
                avatarSrc={avatarSrc}
                online={true}
                lastMessagefromUser={false}
                lastMessage="Five"
                timeOfLastMessage={new Date('November 14, 2021 19:28:00')}
            />
        </>
    )
}