import {io} from 'socket.io-client';




export abstract class AbstractSocket {
    protected static socket = io();
}
