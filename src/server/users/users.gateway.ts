import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';


enum socketEvents {
    setOnline = 'set_online'
}


@WebSocketGateway()
export class UsersGateway {
    @WebSocketServer()
    private readonly server: Server;
  
    @SubscribeMessage(socketEvents.setOnline)
    public handleSetOnline(@MessageBody() online: boolean) {
        console.log(online);
    }
}
