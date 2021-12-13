import {UseGuards} from '@nestjs/common';
import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection, 
    OnGatewayDisconnect
} from '@nestjs/websockets';
import {Server, Socket} from 'socket.io';
import {MessageCreationAttrsRaw} from './messages.types';
import {LoggedInGuard} from '../auth/guard/logged-in.guard';


@WebSocketGateway()
export class MessagesGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    private readonly server!: Server;
  
    @UseGuards(LoggedInGuard)
    @SubscribeMessage('message')
    public handleMessage(@MessageBody() {text, toUserId}: MessageCreationAttrsRaw) {
        console.log(text, toUserId);
    }

    public async handleConnection(client: Socket) {
        console.log(`Client connected: ${client.id}`);
        this.server.to(client.id).emit('test', 'testing');
    }
    

    public async handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
        const sockets = await this.server.fetchSockets();
        console.log(sockets[0]);
    }
}
