import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {User} from './users.model';
import {
    UserCreationAttrs, 
    editUserNameOpt, 
    editUserEmailOpt, 
    editUserPasswordOpt, 
    editUserOnlineOpt, 
    editUserAvatarOpt
} from './users.types';


@Injectable()
export class UsersService {  
    constructor(@InjectModel(User) private userRepository: typeof User) {}

    public async createUser(creationAttrs: UserCreationAttrs): Promise<User> {
        const user = await this.userRepository.create(creationAttrs);
        return user;
    }

    public async getAllUsers(): Promise<User[]> {
        const users = await this.userRepository.findAll();
        return users;
    }

    public async getUserById(id: number): Promise<User | null> {
        const user = await this.userRepository.findOne({where: {id}});
        return user;
    }

    public async getUserByEmail(email: string): Promise<User | null> {
        const user = await this.userRepository.findOne({where: {email}});
        return user;
    }

    public async checkUserId(id: number): Promise<boolean> {
        const user = await this.getUserById(id);
        return Boolean(user);
    }

    public async checkUserEmail(email: string): Promise<boolean> {
        const user = await this.getUserByEmail(email);
        return Boolean(user);
    }

    public async editUserName({id, username}: editUserNameOpt): Promise<void> {
        await this.userRepository.update({username}, {where: {id}});
    }

    public async editUserEmail({id, email}: editUserEmailOpt): Promise<void> {
        await this.userRepository.update({email}, {where: {id}});
    }

    public async editUserPassword({id, password}: editUserPasswordOpt): Promise<void> {
        await this.userRepository.update({password}, {where: {id}});
    }

    public async editUserOnline({id, online}: editUserOnlineOpt): Promise<void> {
        await this.userRepository.update({online}, {where: {id}});
    }

    public async editUserAvatar({id, avatarSrc}: editUserAvatarOpt): Promise<void> {
        await this.userRepository.update({avatarSrc}, {where: {id}});
    }

    public async confirmUser(id: number): Promise<void> {
        await this.userRepository.update({confirmed: true}, {where: {id}});
    }

    public async deleteUser(id: number): Promise<void> {
        await this.userRepository.destroy({where: {id}});
    }
}