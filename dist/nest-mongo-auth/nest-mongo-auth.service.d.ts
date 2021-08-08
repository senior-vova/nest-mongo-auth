import { Model } from "mongoose";
import { NMAJWTOptionsI, NMALoginResponseType, NMAServiceOptionsI } from "src/interfaces";
import { JWTService } from "src/jwt-module/jwt.service";
export declare class NestMongoAuthService {
    private readonly jwtService;
    private userModel;
    private options;
    private isInit;
    constructor(jwtService: JWTService);
    init(userModel: Model<any>, options: NMAServiceOptionsI, jwtOptions: NMAJWTOptionsI): void;
    login(validate_data: Object): Promise<NMALoginResponseType>;
    auth(userID: string): Promise<NMALoginResponseType>;
    private generateDataForJWT;
}
