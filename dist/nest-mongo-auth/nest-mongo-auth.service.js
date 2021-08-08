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
exports.NestMongoAuthService = void 0;
const common_1 = require("@nestjs/common");
const interfaces_1 = require("../interfaces");
const jwt_service_1 = require("../jwt-module/jwt.service");
let NestMongoAuthService = class NestMongoAuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.isInit = false;
    }
    init(userModel, options, jwtOptions) {
        this.userModel = userModel;
        this.options = options;
        this.jwtService.init(jwtOptions.secretKey, jwtOptions.expiresIn);
        this.isInit = true;
    }
    async login(validate_data) {
        if (!this.isInit)
            throw interfaces_1.NotInitError;
        try {
            const user = await this.userModel.findOne(validate_data, this.options.getUserProjection, this.options.getUserOptions);
            const dataToJWT = this.generateDataForJWT(user);
            const jwt = await this.jwtService.GenerateToken(dataToJWT);
            return Promise.resolve({ user, jwt });
        }
        catch (error) {
            return Promise.reject({ error });
        }
    }
    async auth(userID) {
        if (!this.isInit)
            throw interfaces_1.NotInitError;
        try {
            const user = await this.userModel.findById(userID, this.options.getUserProjection, this.options.getUserOptions);
            const dataToJWT = this.generateDataForJWT(user);
            const jwt = await this.jwtService.GenerateToken(dataToJWT);
            return Promise.resolve({ user, jwt });
        }
        catch (error) {
            return Promise.reject({ error });
        }
    }
    generateDataForJWT(user) {
        const data = {
            _id: user._id,
        };
        for (const [key, value] of Object.entries(user)) {
            if (this.options.toTokenUserFields.includes(key)) {
                data[key] = value;
            }
        }
        return data;
    }
};
NestMongoAuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [jwt_service_1.JWTService])
], NestMongoAuthService);
exports.NestMongoAuthService = NestMongoAuthService;
//# sourceMappingURL=nest-mongo-auth.service.js.map