export interface MessageId {
    id: number;
}

export interface MessageCreationAttrs {
    text: string;
    fromUserId: string;
    toUserId: string;
}

export interface MessageAttrs extends MessageCreationAttrs {
    id: number;
    date: Date;
    readed: boolean;
}