export declare class JWTService {
    private secretKey;
    private expiresIn;
    constructor();
    init(secretKey: string, expiresIn: string): void;
    GenerateToken(data: Object): Promise<string>;
    Verify(bearerToken: string): Promise<{
        data: any;
    }>;
    private isInit;
}
