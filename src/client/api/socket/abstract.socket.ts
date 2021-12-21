import {io} from 'socket.io-client';
import {config} from '@config/config';


export abstract class AbstractSocket {
    protected static readonly protocol: string = config.encryption ? 'wss' : 'ws';
    protected static readonly baseUrl: string = `${AbstractSocket.protocol}//${config.host}:${config.port}`;
    protected static token = AbstractSocket.updateToken();

    protected static updateToken(): string {
        const token = localStorage.getItem('token');
        return token ? token : '';
    }
    
    protected static socket = io(AbstractSocket.baseUrl, {
        auth: {
            token: AbstractSocket.token
        }
    });
}
