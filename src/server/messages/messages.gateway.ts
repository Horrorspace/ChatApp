import {UseGuards, Inject} from '@nestjs/common';
import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection, 
    OnGatewayDisconnect
} from '@nestjs/websockets';
import {JwtService} from '@nestjs/jwt'
import {Server, Socket} from 'socket.io';
import {MessageCreationAttrsRaw} from './messages.types';
import {LoggedInGuard} from '../auth/guard/logged-in.guard';
import {UserAttrs} from '../users/users.types';
import {JwtAuthGuard} from '../auth/guard/jwt.guard';
import { AccessToken } from '../auth/auth.types';


@WebSocketGateway()
export class MessagesGateway implements OnGatewayConnection, OnGatewayDisconnect {
    constructor(@Inject(JwtService) private readonly jwtService: JwtService) {}

    @WebSocketServer()
    private readonly server!: Server;

    private readonly clients: UserAttrs[] = [];
  
    @UseGuards(LoggedInGuard)
    @SubscribeMessage('message')
    public handleMessage(@MessageBody() {text, toUserId}: MessageCreationAttrsRaw) {
        console.log(text, toUserId);
    }

    @UseGuards(JwtAuthGuard)
    @SubscribeMessage('auth')
    public handleAuth(@MessageBody() {access_token}: AccessToken) {
        console.log(session.getUpgradeRequest().getUserPrincipal())
        //const user = this.jwtService.decode(access_token) as UserAttrs;
        //this.clients.push(user);
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
