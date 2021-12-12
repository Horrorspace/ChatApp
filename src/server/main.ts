import {NestFactory} from "@nestjs/core";
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app.module';


export async function start() {
    console.log(`mode is: ${process.env.NODE_ENV}`);

    const PORT: number = Number(process.env.PORT) || 3007;
    const app = await NestFactory.create(AppModule);

    const swaggerConfig = new DocumentBuilder()
        .setTitle('ChatApp')
        .setDescription('ChatApp REST API description')
        .setVersion('1.0.0')
        .addBasicAuth()
        .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api/docs', app, document);

    
    await app.listen(PORT);
    console.log(`HTTP server has been started on port ${PORT}...`);
}

start();
