"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTService = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken = require("jsonwebtoken");
const constants_1 = require("../constants");
const interfaces_1 = require("../interfaces");
let JWTService = class JWTService {
    constructor(options) {
        this.secretKey = options.secretKey;
        this.expiresIn = options.expiresIn;
    }
    async GenerateToken(data) {
        try {
            const jwt = jsonwebtoken.sign(data, this.secretKey, {
                expiresIn: this.expiresIn,
            });
            return Promise.resolve(jwt);
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    async Verify(bearerToken) {
        try {
            const data = jsonwebtoken.verify(bearerToken, this.secretKey);
            return Promise.resolve({ data });
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
};
JWTService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.JWT_MODULE_CONFIGS)),
    __metadata("design:paramtypes", [Object])
], JWTService);
exports.JWTService = JWTService;
//# sourceMappingURL=jwt.service.js.map