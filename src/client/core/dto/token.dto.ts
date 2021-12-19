import {IToken} from '@interfaces/IAuth';


export class TokenDto implements IToken {
    public readonly access_token: string;


    constructor(
        access_token: string
    ) {
        this.access_token = access_token;
    }

    public getValue() {
        return {
            access_token: this.access_token
        }
    }
}