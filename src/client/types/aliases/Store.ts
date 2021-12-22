import {ActionCreatorWithPayload, PayloadAction} from '@reduxjs/toolkit';
import {MessagesActTypes} from '@store/types/MessagesActTypes';
import {AuthActions} from '@store/actions/AuthActions';
import {ContactsActions} from '@store/actions/ContactsActions';
import {MessagesActions} from '@store/actions/MessagesActions';


export type MessageAction<T> = ActionCreatorWithPayload<T, MessagesActTypes>;

export type MessagePayloadAction<P> = PayloadAction<P, MessagesActTypes>;

export type AuthAction = 
    typeof AuthActions.clearAuth | 
    typeof AuthActions.clearToken |
    typeof AuthActions.getTokenThunk |
    typeof AuthActions.getUserThunk |
    typeof AuthActions.loginThunk |
    typeof AuthActions.logoutThunk |
    typeof AuthActions.registerThunk |
    typeof AuthActions.setAuth |
    typeof AuthActions.setToken;

export type ContactsAction =
    typeof ContactsActions.addContact |
    typeof ContactsActions.deleteContact |
    typeof ContactsActions.getContactsThunk |
    typeof ContactsActions.setContacts |
    typeof ContactsActions.setOnline;

export type MessagesAction =
    typeof MessagesActions.addMessage |
    typeof MessagesActions.deleteMessage |
    typeof MessagesActions.deleteMessageThunk |
    typeof MessagesActions.getAllMessagesThunk |
    typeof MessagesActions.sendNewMessage |
    typeof MessagesActions.setMessages |
    typeof MessagesActions.setReadMessage |
    typeof MessagesActions.setReadMessageThunk;

export type StoreAction = AuthAction | ContactsAction | MessagesAction;