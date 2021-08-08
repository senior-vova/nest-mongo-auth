"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTService = exports.JWTModule = exports.NestMongoAuthService = exports.NestMongoAuthModule = void 0;
var nest_mongo_auth_module_1 = require("./nest-mongo-auth/nest-mongo-auth.module");
Object.defineProperty(exports, "NestMongoAuthModule", { enumerable: true, get: function () { return nest_mongo_auth_module_1.NestMongoAuthModule; } });
var nest_mongo_auth_service_1 = require("./nest-mongo-auth/nest-mongo-auth.service");
Object.defineProperty(exports, "NestMongoAuthService", { enumerable: true, get: function () { return nest_mongo_auth_service_1.NestMongoAuthService; } });
var jwt_module_1 = require("./jwt-module/jwt.module");
Object.defineProperty(exports, "JWTModule", { enumerable: true, get: function () { return jwt_module_1.JWTModule; } });
var jwt_service_1 = require("./jwt-module/jwt.service");
Object.defineProperty(exports, "JWTService", { enumerable: true, get: function () { return jwt_service_1.JWTService; } });
//# sourceMappingURL=index.js.map