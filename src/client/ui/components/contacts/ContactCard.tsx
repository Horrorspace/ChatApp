import React from 'react';


interface contactCardProps {
    username: string;
    avatarSrc: string;
    online: boolean;
    lastMessagefromUser: boolean;
    lastMessage: string;
    timeOfLastMessage: Date;
}


const Component: React.FC<contactCardProps> = () => {
    return (
        <>
        </>
    )
}

export const ContactCard = React.memo(Component);