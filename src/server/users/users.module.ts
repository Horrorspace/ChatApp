import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {User} from './users.model';
import {UsersResolver} from './users.resolver';
import {JwtModule} from '@nestjs/jwt';
import {jwtSecret} from '../auth/const/jwt.const';
// import {UsersGateway} from './users.gateway';


@Module({
    controllers: [UsersController],
    providers: [UsersService, UsersResolver],
    imports: [
        SequelizeModule.forFeature([User]),
        JwtModule.register({
            secret: jwtSecret
        })
    ],
    exports: [UsersService, UsersResolver]
})
export class UsersModule {}
