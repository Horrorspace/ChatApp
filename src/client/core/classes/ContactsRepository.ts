import {IContactsState} from '@interfaces/IStore';
import {UsersRepository} from '@core/classes/UsersRepository';


export class ContactsRepository {
    public contacts: IUser[];
    public currentContact: IUser | null;
  
    constructor({contacts, currentContact}: IContactsState) {
        this.contacts = contacts;
        this.currentContact = currentContact;
    }
  
    public getState(): IContactsState {
        return {
            contacts: this.contacts,
            currentContact: this.currentContact
        }
    }
  
    public getContacts(): IUser[] {
        return this.contacts
    }
  
    public getCurrentContact(): IUser {
        return this.currentContact
    }
  
    public setContacts(contacts: IUser[]): IUser[] {
        this.contacts = contacts;
        return this.getContacts();
    }
    
    public addContact(contact: IUser): IUser[] {
        const users = new UsersRepository(this.getContacts());
        users.addUser(contact);
        this.setContacts(users);
        return this.getContacts();
    }
  
    public setCurrentContact(currentContact: IUser): IUser {
        this.currentContact = currentContact;
        return this.getCurrentContact();
    }
  
    public clearCurrentContact(): void {
        this.currentContact = null;
    }
}
