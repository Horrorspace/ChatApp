// import {Module} from '@nestjs/common';
// import {SequelizeModule} from "@nestjs/sequelize";
// import {sessions} from './session.constants'

export const test = 'test';


// @Module({
//     controllers: [],
//     providers: [
//         {
//             provide: sessions,
//             useClass: SequelizeModule.forRoot({
//                 dialect: 'postgres',
//                 host: process.env.POSTGRES_HOST,
//                 port: Number(process.env.POSTGRES_PORT),
//                 username: process.env.POSTGRES_USER,
//                 password: process.env.POSTGRES_PASSWORD,
//                 database: process.env.POSTGRES_DB,
//                 models: [User, Message],
//                 autoLoadModels: true
//             })
//         }
//     ],
//     imports: [
    
//     ],
//     exports: []
// })
// export class UsersModule {}