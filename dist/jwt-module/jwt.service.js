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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTService = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken = require("jsonwebtoken");
let JWTService = class JWTService {
    constructor() { }
    init(secretKey, expiresIn) {
        this.secretKey = secretKey;
        this.expiresIn = expiresIn;
    }
    async GenerateToken(data) {
        this.isInit();
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
        this.isInit();
        try {
            const data = jsonwebtoken.verify(bearerToken, this.secretKey);
            return Promise.resolve({ data });
        }
        catch (error) {
            return Promise.reject(error);
        }
    }
    isInit() {
        if (!this.secretKey || !this.expiresIn)
            throw new Error(`Please call init() before using`);
    }
};
JWTService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], JWTService);
exports.JWTService = JWTService;
//# sourceMappingURL=jwt.service.js.map