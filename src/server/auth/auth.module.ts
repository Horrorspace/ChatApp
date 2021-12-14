import {Module} from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {AuthService} from './provider/auth.service';
import {UsersModule} from '../users/users.module';
import {AuthController} from './auth.controller';
import {LocalStrategy} from './strategy/local.strategy';
import {BasicStrategy} from './strategy/basic.strategy';
import {LocalAuthGuard} from './guard/local.guard';
import {BasicAuthGuard} from './guard/basic.guard';
import {LocalSerializer} from './provider/serialization.provider';
import {JwtModule} from '@nestjs/jwt';


@Module({
    controllers: [AuthController],
    providers: [
        AuthService, 
        LocalStrategy,
        LocalAuthGuard,
        LocalSerializer,
        BasicStrategy,
        BasicAuthGuard
    ],
    imports: [
        UsersModule, 
        PassportModule.register({
            session: true,
            defaultStrategy: 'local',
        }),
        JwtModule.register({
            secret: process.env.JWT_SECRET_KEY,
            signOptions: { expiresIn: '3600s' },
        })
    ],
    exports: [
        AuthService, 
        LocalStrategy,
        LocalAuthGuard,
        LocalSerializer,
        BasicStrategy,
        BasicAuthGuard
    ]
})
export class AuthModule {}
