import {Module} from '@nestjs/common';
import {PassportModule} from '@nestjs/passport';
import {AuthService} from './provider/auth.service';
import {UsersModule} from '../users/users.module';
import {AuthController} from './auth.controller';
import {LocalStrategy} from './strategy/local.strategy';
import {BasicStrategy} from './strategy/basic.strategy';
import {JwtStrategy} from './strategy/jwt.strategy';
import {LocalAuthGuard} from './guard/local.guard';
import {BasicAuthGuard} from './guard/basic.guard';
import {JwtAuthGuard} from './guard/jwt.guard';
import {LocalSerializer} from './provider/serialization.provider';
import {JwtModule} from '@nestjs/jwt';
import {jwtSecret} from './const/jwt.const'


@Module({
    controllers: [AuthController],
    providers: [
        AuthService, 
        LocalStrategy,
        LocalAuthGuard,
        LocalSerializer,
        BasicStrategy,
        BasicAuthGuard,
        JwtStrategy,
        JwtAuthGuard

    ],
    imports: [
        UsersModule, 
        PassportModule.register({
            session: true,
            defaultStrategy: 'local',
        }),
        JwtModule.register({
            secret: jwtSecret,
            signOptions: { expiresIn: 36000000 },
        })
    ],
    exports: [
        AuthService, 
        LocalStrategy,
        LocalAuthGuard,
        LocalSerializer,
        BasicStrategy,
        BasicAuthGuard,
        JwtStrategy,
        JwtAuthGuard
    ]
})
export class AuthModule {}
