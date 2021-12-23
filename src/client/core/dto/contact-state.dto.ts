import {IContactsState} from '@interfaces/IStore';
import {IUser} from '@interfaces/IUser';


export class ContactsStateDto implements IContactsState {
    public contacts: IUser[];
    public currentContact: IUser | null;

    constructor(
        contacts: IUser[],
        currentContact: IUser | null
    ) {
        this.contacts = contacts;
        this.currentContact = currentContact;
    }
}
