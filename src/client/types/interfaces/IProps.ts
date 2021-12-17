import {lastOnline} from '@aliases/Message';
import {IMessage} from '@interfaces/IMessage';
import {InfoFields} from '@aliases/Profile'


export interface IDateMessageProps {
    date: Date;
}

export interface IStatusProps {
    fromUser: boolean;
    readed: boolean;
}

export interface IMessageProps {
    userId: number;
    fromUserId: number;
    text: string;
    date: Date;
    readed: boolean;
}

export interface IMessagesProps {
    messages: IMessage[];
    userId: number;
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
    userId: number;
    lastMessageFromUserId: number;
    userAvatarSrc: string;
}

export interface IContactCardProps extends IUserAvatarProps, abstractUser {
    lastMessage: string;
    timeOfLastMessage: Date;
}

export interface IInfoFieldProps {
    title: string;
    value: string;
}

export interface IInfoListProps {
    infoFields: InfoFields;
}

export interface IInputFieldProps {
    title: string;
    placeholder: string;
}

export interface IPassFieldProps extends IInputFieldProps {
    forgotPassTitle?: string;
}

export interface IAvatarProps {
    src: string;
}

export interface IProfileProps extends IAvatarProps, IInfoListProps {}

export interface IGoogleAuthProps {
    aMember: boolean;
}

export interface IAMemberProps {
    aMember: boolean;
}

