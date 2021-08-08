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
exports.NestMongoAuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_service_1 = require("../jwt-module/jwt.service");
const constants_1 = require("../constants");
let NestMongoAuthService = class NestMongoAuthService {
    constructor(options, jwtService) {
        this.jwtService = jwtService;
        this.userModel = options.userModel;
        this.serviceOptions = options.serviceOptions;
    }
    async login(validate_data) {
        try {
            const user = await this.userModel.findOne(validate_data, this.serviceOptions.getUserProjection, this.serviceOptions.getUserOptions);
            if (user) {
                const dataToJWT = this.generateDataForJWT(user);
                const jwt = await this.jwtService.GenerateToken(dataToJWT);
                return Promise.resolve({ user, jwt });
            }
            else {
                return Promise.reject({ error: "User is not found" });
            }
        }
        catch (error) {
            return Promise.reject({ error });
        }
    }
    async auth(userID) {
        try {
            const user = await this.userModel.findById(userID, this.serviceOptions.getUserProjection, this.serviceOptions.getUserOptions);
            if (user) {
                const dataToJWT = this.generateDataForJWT(user);
                const jwt = await this.jwtService.GenerateToken(dataToJWT);
                return Promise.resolve({ user, jwt });
            }
            else {
                return Promise.reject({ error: "User is not found" });
            }
        }
        catch (error) {
            return Promise.reject({ error });
        }
    }
    generateDataForJWT(user) {
        const data = { _id: user._id };
        return data;
    }
};
NestMongoAuthService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.NMA_MODULE_CONFIGS)),
    __metadata("design:paramtypes", [Object, jwt_service_1.JWTService])
], NestMongoAuthService);
exports.NestMongoAuthService = NestMongoAuthService;
//# sourceMappingURL=nest-mongo-auth.service.js.map