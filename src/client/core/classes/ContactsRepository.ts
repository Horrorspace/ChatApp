import {IContactsState} from '@interfaces/IStore';
import {User} from '@core/classes/User';
import {UsersRepository} from '@core/classes/UsersRepository';
import {IUser, IOnline} from '@interfaces/IUser';


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
  
    public getCurrentContact(): IUser | null  {
        return this.currentContact
    }
  
    public setContacts(contacts: IUser[]): IUser[] {
        this.contacts = contacts;
        return this.contacts;
    }
    
    public addContact(contact: IUser): IUser[] {
        const users = new UsersRepository(this.contacts);
        users.addUser(contact);
        this.setContacts(users.getUsers());
        return this.contacts;
    }

    public setOnline(options: IOnline): IUser[] {
        const users = new UsersRepository(this.contacts);

        if(this.currentContact && this.currentContact.id === options.id) {
            const currentUser = new User(this.currentContact);
            currentUser.setOnline(options.online);
        }
        
        users.setOnline(options);
        return this.contacts;
    }

    public deleteUser(id: number): IUser[] {
        const users = new UsersRepository(this.contacts);

        if(this.currentContact && this.currentContact.id === id) {
            this.currentContact = null;
        }

        users.deleteUser(id);
        return this.contacts;
    }
  
    public setCurrentContact(currentContact: IUser): IUser | null {
        this.currentContact = currentContact;
        return this.currentContact;
    }
  
    public clearCurrentContact(): void {
        this.currentContact = null;
    }
}
