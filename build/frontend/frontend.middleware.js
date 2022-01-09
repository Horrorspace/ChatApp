"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrontendMiddleware = void 0;
const common_1 = require("@nestjs/common");
const path_1 = __importDefault(require("path"));
let FrontendMiddleware = class FrontendMiddleware {
    use(req, res, next) {
        const { url } = req;
        if (url.indexOf('/api') === 1 || url.indexOf('/auth') === 1 || url.indexOf('/graphql') === 1 || url.indexOf('/public') === 1) {
            next();
        }
        else {
            res.sendFile(path_1.default.resolve(process.cwd(), 'build', 'client', 'index.html'));
        }
    }
};
FrontendMiddleware = __decorate([
    (0, common_1.Injectable)()
], FrontendMiddleware);
exports.FrontendMiddleware = FrontendMiddleware;
