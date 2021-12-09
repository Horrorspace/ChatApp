import {Module} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
import {ConfigModule} from '@nestjs/config';
import {User} from './users/users.model';
import {Message} from './messages/messages.model';
import {UsersModule} from './users/users.module';
import {MessagesModule} from './messages/messages.module';
import {AuthModule} from './auth/auth.module';
import {SessionsModule} from './sessions/sessions.module';
import {GraphQLModule} from '@nestjs/graphql';


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.CHAT_DB,
            models: [User, Message],
            autoLoadModels: true,
            logging: false
        }),
        GraphQLModule.forRoot({
            debug: false,
            playground: true,
            include: [UsersModule],
            typePaths: ['./graphql/schema.graphql'],
            definitions: {
                path: join(process.cwd(), 'src/server/graphql/graphql.type.ts')
            },
        }),
        SessionsModule,
        UsersModule,
        AuthModule,
        MessagesModule,
    ],
    exports: []
})
export class AppModule {}
