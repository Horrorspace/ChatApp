import {Injectable, NestMiddleware} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';
import path from 'path';


@Injectable()
export class FrontendMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const {url} = req;
        if(url.indexOf('/api') === 1 || url.indexOf('/auth') === 1 || url.indexOf('/graphql') === 1 || url.indexOf('/public') === 1) {
            next();
        } 
        else {
            res.sendFile(path.resolve(process.cwd(), 'build', 'client', 'index.html'));
        }
    }
}
