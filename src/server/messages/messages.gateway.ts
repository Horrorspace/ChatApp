import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import {Server} from 'socket.io';


@WebSocketGateway()
export class UsersGateway {
    @WebSocketServer()
    private readonly server!: Server;
  
    @SubscribeMessage()
    public handleSetOnline(@MessageBody() {test}: test) {
        console.log();
        this.test();
    }

    public test() {
        this.server.emit('test', 'hello buddy')
    }
}
