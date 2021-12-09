import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {User} from './users.model';
import {UsersResolver} from './users.resolver';


@Module({
    controllers: [UsersController],
    providers: [UsersService, UsersResolver],
    imports: [
        SequelizeModule.forFeature([User])
    ],
    exports: [UsersService, UsersResolver]
})
export class UsersModule {}