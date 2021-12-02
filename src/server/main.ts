import { NestFactory } from "@nestjs/core";
import {AppModule} from './app.module';


export async function start() {
  console.log(`mode is: ${process.env.NODE_ENV}`);

  const PORT: number = Number(process.env.PORT) || 3007;
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT);

  console.log(`HTTP server has been started on port ${PORT}...`);
}

start();