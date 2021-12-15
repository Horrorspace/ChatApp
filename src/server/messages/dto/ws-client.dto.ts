import {wsClient} from '../messages.types';


export class  WsClientDto implements wsClient {   
    public readonly wsId: string;
    public readonly id: number;

    constructor(wsId: string, id: number) {
        this.wsId = wsId;
        this.id = id;
    }
}