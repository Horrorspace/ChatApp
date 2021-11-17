import {lastOnline} from '@aliases/Message';
import {IMessage} from '@interfaces/IMessage';


export interface IMessageProps {
    text: string;
    time: Date;
}

export interface IMessagesProps {
    messages: IMessage[]
}

export interface abstractUser {
    username: string;
    avatarSrc: string;
    online: boolean;
}

export interface IContactProps extends abstractUser {
    lastOnline: lastOnline;
}

export interface IUserAvatarProps {
    lastMessagefromUser: boolean;
    userAvatarSrc: string;
}

export interface IContactCardProps extends IUserAvatarProps, abstractUser {
    lastMessage: string;
    timeOfLastMessage: Date;
}
