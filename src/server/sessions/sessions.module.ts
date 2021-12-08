import {Module, NestModule, MiddlewareConsumer} from '@nestjs/common';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import session from 'express-session';
import {Sequelize} from 'sequelize';
import connectSequelize from 'connect-session-sequelize';


@Module({
    controllers: [],
    providers: [],
    imports: [],
    exports: []
})
export class SessionsModule implements NestModule {
    private readonly SequelizeStore = connectSequelize(session.Store);
    private readonly sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.SESSION_DB,
        logging: false
    });
    private readonly sessionStore = new this.SequelizeStore({
        db: this.sequelize,
        checkExpirationInterval: 60*60*1000,
        expiration: 24*60*60*1000
    });

    
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                cookieParser(),
                session({
                    secret: "cats and dogs",
                    store: this.sessionStore,
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
            )
            .forRoutes('*');
    }
}