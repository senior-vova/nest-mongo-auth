"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestMongoAuthService = exports.NestMongoAuthModule = void 0;
var nest_mongo_auth_module_1 = require("./nest-mongo-auth/nest-mongo-auth.module");
Object.defineProperty(exports, "NestMongoAuthModule", { enumerable: true, get: function () { return nest_mongo_auth_module_1.NestMongoAuthModule; } });
var nest_mongo_auth_service_1 = require("./nest-mongo-auth/nest-mongo-auth.service");
Object.defineProperty(exports, "NestMongoAuthService", { enumerable: true, get: function () { return nest_mongo_auth_service_1.NestMongoAuthService; } });
__exportStar(require("./interfaces"), exports);
//# sourceMappingURL=index.js.map