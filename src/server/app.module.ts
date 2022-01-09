import {Module, NestModule, MiddlewareConsumer, RequestMethod} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
import {ConfigModule} from '@nestjs/config';
import {ServeStaticModule} from '@nestjs/serve-static';
import {User} from './users/users.model';
import {Message} from './messages/messages.model';
import {UsersModule} from './users/users.module';
import {MessagesModule} from './messages/messages.module';
import {AuthModule} from './auth/auth.module';
import {SessionsModule} from './sessions/sessions.module';
import {GraphQLModule} from '@nestjs/graphql';
import {headersObj, ReqObj} from './auth/auth.types';
// import {FrontendMiddleware} from './frontend/frontend.middleware';
// import {FrontendModule} from './frontend/frontend.module';
import {join} from 'path';



@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, 'client'),
            exclude: ['/api/*', '/public/*']
            // rootPath: join(process.cwd(), 'build', 'client'),
            // renderPath: '/test',
            // serveRoot: '/',
            // serveStaticOptions: {}
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            dialectOptions: {
                ssl: true
            },
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.CHAT_DB,
            models: [User, Message],
            autoLoadModels: true,
            ssl: true,
            logging: false
        }),
        GraphQLModule.forRoot({
            debug: true,
            playground: true,
            typePaths: ['./**/*.graphql'],
            context: ({req}: ReqObj): headersObj  => ({headers: req.headers})
        }),
        SessionsModule,
        UsersModule,
        AuthModule,
        MessagesModule
    ],
    exports: []
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        console.log(join(process.cwd(), 'build', 'client'));

        consumer
            .apply()
            .forRoutes(
                {
                    path: '/**',
                    method: RequestMethod.ALL,
                }
            );
    }
}