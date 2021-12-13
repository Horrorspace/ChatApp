import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection, 
    OnGatewayDisconnect
} from '@nestjs/websockets';
import {Server} from 'socket.io';
import {MessageCreationAttrsRaw} from './messages.types';


@WebSocketGateway()
export class MessagesGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    private readonly server!: Server;
  
    @SubscribeMessage('message')
    public handleMessage(@MessageBody() {text, toUserId}: MessageCreationAttrsRaw) {
        console.log(text, toUserId);
    }

    handleConnection(client: Socket, ...args: any[]) {
        console.log(`Client connected: ${client.id}`);
        console.log(server.sockets);
    }

    handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
        console.log(server.sockets);
    }
}
