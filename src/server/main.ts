import { NestFactory } from "@nestjs/core";
import session from 'express-session';
import {Sequelize} from 'sequelize';
import connectSequelize from 'connect-session-sequelize';
import {AppModule} from './app.module';


export async function start() {
  console.log(`mode is: ${process.env.NODE_ENV}`);

  const PORT: number = Number(process.env.PORT) || 3007;
  const app = await NestFactory.create(AppModule);
  
  const SequelizeStore = connectSequelize(session.Store);
  const sequelize = new Sequelize({
      dialect: 'postgres',
      host: 'localhost',
      database: 'sessions',
      username: 'chat_admin',
      password: 'KQoEgwBi',
      logging: false
  });
  const sessionStore = new SequelizeStore({
      db: sequelize,
      checkExpirationInterval: 60*60*1000,
      expiration: 24*60*60*1000
  });
  app.use(session({
      secret: "cats and dogs",
      store: sessionStore,
      resave: false,
      proxy: false,
      saveUninitialized: false,
      cookie: {
          maxAge: 24*60*60*1000,
          secure: false,
          httpOnly: false,
          sameSite: true,
      }

  }));
  sessionStore.sync();
  

  await app.listen(PORT);

  console.log(`HTTP server has been started on port ${PORT}...`);
}

start();
