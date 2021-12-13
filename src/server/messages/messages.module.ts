import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {MessagesController} from './messages.controller';
import {MessagesService} from './messages.service';
import {Message} from './messages.model';
import {UsersModule} from '../users/users.module';
import {MessagesGateway} from './messages.gateway';


@Module({
    controllers: [MessagesController],
    providers: [MessagesService, MessagesGateway],
    imports: [
        SequelizeModule.forFeature([Message]),
        UsersModule
    ],
    exports: [MessagesModule, MessagesGateway]
})
export class MessagesModule {}
