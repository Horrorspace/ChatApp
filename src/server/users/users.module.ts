import {Module} from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersController} from './users.controller';
import {UsersService} from './users.service';
import {User} from './users.model';


@Module({
    controllers: [UsersController],
    providers: [{
        provide: UsersService,
        useClass: UsersService
    }],
    imports: [
        SequelizeModule.forFeature([User])
    ],
    exports: [UsersService]
})
export class UsersModule {}