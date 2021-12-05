import {Module} from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {AuthService} from './auth.service';
import {UsersModule} from '../users/users.module';
import {AuthController} from './auth.controller';
import {LocalStrategy} from './strategy/local.strategy';


@Module({
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy],
    imports: [UsersModule, PassportModule],
    exports: [AuthService, LocalStrategy]
})
export class AuthModule {}