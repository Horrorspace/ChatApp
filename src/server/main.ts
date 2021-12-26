import {NestFactory} from "@nestjs/core";
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {NestExpressApplication} from '@nestjs/platform-express';
import {AppModule} from './app.module';
// import {join} from 'path';
// import express from 'express';
// import path from 'path';


export async function start() {
    console.log(`mode is: ${process.env.NODE_ENV}`);

    const PORT: number = Number(process.env.PORT) || 3007;
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    // const __dirname: string = path.dirname(__filename);
    // app.use('/public/', express.static(path.join(__dirname, 'client', 'public')));

    // console.log('app ', path.join(__dirname, 'client', 'public'));

    // app.use('/public/', express.static(join(process.cwd(), 'build', 'client', 'public')));

    // app.useStaticAssets(join(process.cwd(), 'build', 'client', 'public'), {
    //     prefix: '/public/'
    // });

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
