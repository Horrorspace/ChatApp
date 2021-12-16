import {IRegister} from '@interfaces/IAuth';
import {LoginDto} from './login.dto';


export class RegisterDto extends LoginDto implements IRegister {
    public readonly username: string;

    constructor(
        email: string,
        password: string,
        username: string
    ) {
        super(email, password);
        this.username = username;
    }
}