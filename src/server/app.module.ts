import {Module, MiddlewareConsumer, NestModule} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
import session from 'express-session';
import {NextFunction, Request, Response} from 'express';
// import {Sequelize} from 'sequelize';
// import {AuthService} from './auth/auth.service';
// import {Strategy as LocalStrategy} from 'passport-local'
// import connectSequelize from 'connect-session-sequelize';
import cookieParser from 'cookie-parser';
import passport from 'passport'
import {ConfigModule} from '@nestjs/config';
import {User} from './users/users.model';
import {Message} from './messages/messages.model';
import {UsersModule} from './users/users.module';
import {MessagesModule} from './messages/messages.module';
import {AuthModule} from './auth/auth.module';


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
            database: process.env.POSTGRES_DB,
            models: [User, Message],
            autoLoadModels: true,
            logging: false
        }),
        UsersModule,
        MessagesModule,
        AuthModule
    ],
})
export class AppModule implements NestModule {
    // constructor(@Inject(AuthService) private readonly authService: AuthService) {}
    
    // private SequelizeStore = connectSequelize(session.Store);
    // private sequelize = new Sequelize({
    //     dialect: 'postgres',
    //     host: 'localhost',
    //     database: 'chat_sessions',
    //     username: 'chat_admin',
    //     password: 'KQoEgwBi',
    //     logging: console.log
    // });
    // private sessionStore = new this.SequelizeStore({
    //     db: this.sequelize,
    //     checkExpirationInterval: 60*60*1000,
    //     expiration: 24*60*60*1000
    // });

    // private localStrategy = new LocalStrategy(
    //     {
    //         usernameField: 'email'
    //     },
    //     async (email: string, password: string, done: CallableFunction): Promise<void> => {
    //         try {
    //             const user = await this.authService.validateUser({email, password});

    //             if(user) {
    //                 return done(null, user);
    //             }
    //             else {
    //                 return done(null, false);
    //             }
    //         }
    //         catch(e) {
    //             return done(e)
    //         }
    //     }
    // )



    
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                cookieParser(),
                session({
                    secret: "cats and dogs",
                    resave: false,
                    proxy: false,
                    saveUninitialized: false,
                    cookie: {
                        maxAge: 24*60*60*1000,
                        secure: false,
                        httpOnly: false,
                        sameSite: true,
                    }
                }), 
                passport.initialize(),
                passport.session(),
                (req: Request, res: Response, next: NextFunction) => {
                    passport.authenticate(
                        'local', {
                            successFlash: true,
                            successMessage: 'You have been logined',
                            failureFlash: true,
                            session: true
                        });
                    console.log(`Request...`);
                    next();
                }
            )
            .forRoutes('*');
    }
}