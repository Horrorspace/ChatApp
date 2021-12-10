import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {User} from './users.model';
import {UsersResolver} from './users.resolver';
import {UsersGateway} from './users.gateway';


@Module({
    controllers: [UsersController],
    providers: [UsersService, UsersResolver, UsersGateway],
    imports: [
        SequelizeModule.forFeature([User])
    ],
    exports: [UsersService, UsersResolver, UsersGateway]
})
export class UsersModule {}
