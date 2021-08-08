"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var JWTModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTModule = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
const interfaces_1 = require("../interfaces");
const jwt_service_1 = require("./jwt.service");
let JWTModule = JWTModule_1 = class JWTModule {
    static forRoot(options) {
        return {
            module: JWTModule_1,
            providers: [
                { provide: constants_1.JWT_MODULE_CONFIGS, useValue: options },
                jwt_service_1.JWTService,
            ],
            exports: [jwt_service_1.JWTService],
        };
    }
};
JWTModule = JWTModule_1 = __decorate([
    common_1.Module({})
], JWTModule);
exports.JWTModule = JWTModule;
//# sourceMappingURL=jwt.module.js.map