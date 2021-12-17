import {Module} from '@nestjs/common';
import {FrontendMiddleware} from './frontend.middleware';


@Module({
    controllers: [],
    providers: [FrontendMiddleware],
    imports: [],
    exports: [FrontendMiddleware]
})
export class FrontendModule {}
