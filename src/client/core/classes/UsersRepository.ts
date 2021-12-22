import {IUser} from '@interfaces/IUser';
import {User} from '@core/classes/User';


export class UsersRepository {
    private users: User[] = [];
    
    
    constructor(users: IUser[] {
        this.users = users.map(user => new User(user));
    }

    public getUsers(): User[] {
        return this.users
    }

    public addUser(user: IUser): User[] {
        const newUser = new User(user); 
        this.users.push(newUser);
        return this.getUsers();
    }
    
    public setOnline(id: number) {
        this.users = this.users.map(user => {
            if(user.getId() === id) {
                user.setOnline();
                return user;
            }
            else {
                return user;
            }
        })
        return this.getUsers();
    }
}
