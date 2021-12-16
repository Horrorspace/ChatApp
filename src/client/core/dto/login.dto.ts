import {ILogin} from '@interfaces/IAuth';


export class LoginDto implements ILogin {
    public readonly email: string;
    public readonly password: string;


    constructor(
        email: string,
        password: string
    ) {
        this.email = email;
        this.password = password;
    }
}