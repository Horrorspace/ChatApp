import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import bcrypt from 'bcrypt';
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
    constructor(@InjectModel(User) private readonly userRepository: typeof User) {}

    public async createUser({username, email, password}: UserCreationAttrs): Promise<User | null> {
        const exist: boolean = await this.checkUserEmail(email);

        if(!exist) {
            const hashedPassword: string = await bcrypt.hash(password, 15);
            const userAttrs: UserCreationAttrs = {
                username,
                email,
                password: hashedPassword
            }
            const user = await this.userRepository.create(userAttrs);
            return user;
        }
        else {
            return null
        }
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

    public async editUserName({id, username}: editUserNameOpt): Promise<User | null> {
        const isIdExist: boolean = await this.checkUserId(id);

        if(isIdExist) {
            await this.userRepository.update({username}, {where: {id}});
            return await this.getUserById(id);
        }
        else {
            return null;
        }
    }

    public async editUserEmail({id, email}: editUserEmailOpt): Promise<User | null> {
        const isIdExist: boolean = await this.checkUserId(id);

        if(isIdExist) {
            await this.userRepository.update({email}, {where: {id}});
            return await this.getUserById(id);
        }
        else {
            return null;
        }
    }

    public async editUserPassword({id, password}: editUserPasswordOpt): Promise<User | null> {
        const isIdExist: boolean = await this.checkUserId(id);

        if(isIdExist) {
            await this.userRepository.update({password}, {where: {id}});
            return await this.getUserById(id);
        }
        else {
            return null;
        }
    }

    public async editUserOnline({id, online}: editUserOnlineOpt): Promise<User | null> {
        const isIdExist: boolean = await this.checkUserId(id);

        if(isIdExist) {
            await this.userRepository.update({online}, {where: {id}});
            return await this.getUserById(id);
        }
        else {
            return null;
        }
    }

    public async editUserAvatar({id, avatarSrc}: editUserAvatarOpt): Promise<User | null> {
        const isIdExist: boolean = await this.checkUserId(id);

        if(isIdExist) {
            await this.userRepository.update({avatarSrc}, {where: {id}});
            return await this.getUserById(id);
        }
        else {
            return null;
        }
    }

    public async confirmUser(id: number): Promise<User | null> {
        const isIdExist: boolean = await this.checkUserId(id);

        if(isIdExist) {
            await this.userRepository.update({confirmed: true}, {where: {id}});
            return await this.getUserById(id);
        }
        else {
            return null;
        }
    }

    public async deleteUser(id: number): Promise<boolean> {
        const isIdExist: boolean = await this.checkUserId(id);

        if(isIdExist) {
            await this.userRepository.destroy({where: {id}});
            return true
        }
        else {
            return false
        }
    }
}