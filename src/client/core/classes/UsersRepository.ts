import {IUser, IOnline} from '@interfaces/IUser';
import {User} from '@core/classes/User';


export class UsersRepository {
    private users: User[] = [];
    
    
    constructor(users: IUser[]) {
        this.users = users.map(user => new User(user));
    }

    public getUsers(): IUser[] {
        return this.users.map(user => user.getUser());
    }

    public addUser(user: IUser): IUser[] {
        const newUser = new User(user); 
        this.users.push(newUser);
        return this.getUsers();
    }
    
    public setOnline({id, online}: IOnline): IUser[] {
        this.users = this.users.map(user => {
            if(user.getId() === id) {
                user.setOnline(online);
                return user;
            }
            else {
                return user;
            }
        })
        return this.getUsers();
    }

    public deleteUser(id: number): IUser[] {
        this.users = this.users.filter(user => user.getId() === id);
        return this.getUsers();
    }
}
