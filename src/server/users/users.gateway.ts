import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import {Server} from 'socket.io';


enum socketEvents {
    setOnline = 'set_online',
    test = 'test'
}

interface test {
    test: boolean
}


@WebSocketGateway()
export class UsersGateway {
    @WebSocketServer()
    private readonly server!: Server;
  
    @SubscribeMessage(socketEvents.test)
    public handleSetOnline(@MessageBody() {test}: test) {
        console.log(test);
        this.test();
    }

    public test() {
        this.server.emit('test', 'hello buddy')
    }
}
