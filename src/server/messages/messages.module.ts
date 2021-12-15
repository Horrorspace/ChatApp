import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {MessagesController} from './messages.controller';
import {MessagesService} from './messages.service';
import {Message} from './messages.model';
import {UsersModule} from '../users/users.module';
import {MessagesGateway} from './messages.gateway';
import {AuthModule} from '../auth/auth.module';
import {JwtModule} from '@nestjs/jwt';
import {jwtSecret} from '../auth/const/jwt.const';


@Module({
    controllers: [MessagesController],
    providers: [MessagesService, MessagesGateway],
    imports: [
        SequelizeModule.forFeature([Message]),
        UsersModule,
        AuthModule,
        JwtModule.register({
            secret: jwtSecret
        })
    ],
    exports: [MessagesModule, MessagesGateway]
})
export class MessagesModule {}
