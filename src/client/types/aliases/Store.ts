import {ActionCreatorWithPayload, PayloadAction} from '@reduxjs/toolkit';
import {MessagesActTypes} from '@store/types/MessagesActTypes';


export type MessageAction<T> = ActionCreatorWithPayload<T, MessagesActTypes>;

export type MessagePayloadAction<P> = PayloadAction<P, MessagesActTypes>;