import {Inject, UseGuards} from '@nestjs/common';
import {
    MessageBody,
    ConnectedSocket,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayConnection, 
    OnGatewayDisconnect
} from '@nestjs/websockets';
import {JwtService} from '@nestjs/jwt'
import {Server, Socket} from 'socket.io';
import {MessageCreationAttrsRaw, wsClient} from './messages.types';
import {LoggedInWsGuard } from '../auth/guard/logged-in-ws.guard';
import {AccessToken, JwtPayload} from '../auth/auth.types';
import {WsClientDto} from './dto/ws-client.dto';
import {CreateMessageDto} from './dto/create-message.dto';
import {MessagesService} from '../messages/messages.service';



@WebSocketGateway()
export class MessagesGateway implements OnGatewayConnection, OnGatewayDisconnect {
    constructor(
        @Inject(JwtService) private readonly jwtService: JwtService,
        @Inject(MessagesService) private readonly messagesService: MessagesService
    ) {}

    @WebSocketServer()
    private readonly server!: Server;

    private clients: wsClient[] = [];

    private getIdBySocket(client: Socket): number | null {
        const filteredArr = this.clients.filter(wsClient => wsClient.wsId === client.id);

        if(filteredArr.length > 0) {
            return filteredArr[0].id;
        }
        else {
            return null;
        }
    }

    private getSocketId(id: number): string | null {
        const filteredArr = this.clients.filter(wsClient => wsClient.id === id);

        if(filteredArr.length > 0) {
            return filteredArr[0].wsId;
        }
        else {
            return null;
        }
    }
  

    @SubscribeMessage('message')
    public async handleMessage(
        @MessageBody() {text, toUserId}: MessageCreationAttrsRaw,
        @ConnectedSocket() client: Socket
    ) {
        const id = this.getIdBySocket(client);

        if(id) {
            const newMessage = new CreateMessageDto(id, toUserId, text);
            await this.messagesService.createMessage(newMessage);
            const messages = await this.messagesService.getUserMessages(toUserId);
            const index = messages.length - 1;
            const message = messages
                .sort((a, b) => a.date!.getTime() - b.date!.getTime())
                [index];
            const fromSocket = this.getSocketId(id);
            const toSocket = this.getSocketId(toUserId);
            fromSocket ? this.server.to(fromSocket).emit('message', message) : null;
            toSocket ? this.server.to(toSocket).emit('message', message) : null;
        }
        
        console.log(text, toUserId);
    }

    @SubscribeMessage('auth')
    @UseGuards(LoggedInWsGuard)
    public handleAuth(@MessageBody() {access_token}: AccessToken, @ConnectedSocket() client: Socket) {
        const {sub} = this.jwtService.decode(access_token) as JwtPayload;
        const wsClient = new WsClientDto(client.id, sub)
        if(this.clients.filter(client => client.wsId === wsClient.wsId).length === 0) {
            this.clients.push(wsClient);
            console.log(wsClient);
            console.log(this.clients);
        }
        else {
            this.clients = this.clients.filter(client => client.wsId === wsClient.wsId);
            this.clients.push(wsClient);
        }
    }

    public async handleConnection(client: Socket) {
        console.log(`Client connected: ${client.id}`);
        this.server.to(client.id).emit('test', 'testing');
    }
    

    public async handleDisconnect(client: Socket) {
        console.log(`Client disconnected: ${client.id}`);
        this.clients = this.clients.filter(wsClient => wsClient.wsId !== client.id);
        console.log(this.clients);
    }
}
