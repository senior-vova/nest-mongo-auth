import { Model } from "mongoose";
import { NMALoginResponseType, NMAModuleSetupOptions } from "../interfaces";
import { JWTService } from "nest-jwt-module";
export declare class NestMongoAuthService {
    private readonly jwtService;
    private getUserOptions;
    private getUserProjection;
    constructor(options: NMAModuleSetupOptions, jwtService: JWTService);
    login(userModel: Model<any>, validate_data: Object): Promise<NMALoginResponseType>;
    auth(userModel: Model<any>, userID: string): Promise<NMALoginResponseType>;
    private generateDataForJWT;
}
