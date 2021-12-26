import {Module, NestModule, MiddlewareConsumer} from '@nestjs/common';
import {FrontendMiddleware} from './frontend.middleware';


@Module({
    controllers: [],
    providers: [FrontendMiddleware],
    imports: [],
    exports: [FrontendMiddleware]
})
export class FrontendModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply()
            .forRoutes('*');
    }
}
