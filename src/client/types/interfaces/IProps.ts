import {lastOnline} from '@aliases/Message';
import {message} from '@interfaces/IMessage';


export interface messageProps {
    text: string;
    time: Date;
}

export interface messagesProps {
    messages: message[]
}

export interface abstractUser {
    username: string;
    avatarSrc: string;
    online: boolean;
}

export interface contactProps extends abstractUser {
    lastOnline: lastOnline;
}

export interface userAvatarProps {
    lastMessagefromUser: boolean;
    userAvatarSrc: string;
}

export interface contactCardProps extends userAvatarProps, abstractUser {
    lastMessage: string;
    timeOfLastMessage: Date;
}