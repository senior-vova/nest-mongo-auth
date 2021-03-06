"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NestMongoAuthModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestMongoAuthModule = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
const nest_mongo_auth_service_1 = require("./nest-mongo-auth.service");
let NestMongoAuthModule = NestMongoAuthModule_1 = class NestMongoAuthModule {
    static forRoot(JWTModule, options) {
        return {
            module: NestMongoAuthModule_1,
            imports: [JWTModule],
            providers: [
                { provide: constants_1.NMA_MODULE_CONFIGS, useValue: options },
                nest_mongo_auth_service_1.NestMongoAuthService,
            ],
            exports: [nest_mongo_auth_service_1.NestMongoAuthService],
        };
    }
};
NestMongoAuthModule = NestMongoAuthModule_1 = __decorate([
    common_1.Module({})
], NestMongoAuthModule);
exports.NestMongoAuthModule = NestMongoAuthModule;
//# sourceMappingURL=nest-mongo-auth.module.js.map