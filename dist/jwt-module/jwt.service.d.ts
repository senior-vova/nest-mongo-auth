import { JWTModuleSetupOptions } from "src/interfaces";
export declare class JWTService {
    private secretKey;
    private expiresIn;
    constructor(options: JWTModuleSetupOptions);
    GenerateToken(data: Object): Promise<string>;
    Verify(bearerToken: string): Promise<{
        data: any;
    }>;
}
