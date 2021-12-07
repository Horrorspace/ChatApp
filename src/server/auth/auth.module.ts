import {Module} from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {AuthService} from './provider/auth.service';
import {UsersModule} from '../users/users.module';
import {AuthController} from './auth.controller';
import {LocalStrategy} from './strategy/local.strategy';
import {LocalAuthGuard} from './guard/local.guard';
import {LocalSerializer} from './auth.serialize';


@Module({
    controllers: [AuthController],
    providers: [
        AuthService, 
        LocalStrategy,
        LocalAuthGuard,
        LocalSerializer
    ],
    imports: [
        UsersModule, 
        PassportModule.register({
            session: true,
            defaultStrategy: 'local',
        })
    ],
    exports: [AuthService, LocalStrategy, LocalAuthGuard, LocalSerializer]
})
export class AuthModule {}
