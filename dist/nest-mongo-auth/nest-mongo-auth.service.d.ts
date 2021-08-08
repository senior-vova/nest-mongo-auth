import { NMALoginResponseType, NMAModuleSetupOptions } from "../interfaces";
import { JWTService } from "src/jwt-module/jwt.service";
export declare class NestMongoAuthService {
    private readonly jwtService;
    private userModel;
    private serviceOptions;
    constructor(options: NMAModuleSetupOptions, jwtService: JWTService);
    login(validate_data: Object): Promise<NMALoginResponseType>;
    auth(userID: string): Promise<NMALoginResponseType>;
    private generateDataForJWT;
}
