import { Model } from "mongoose";
interface LoginSuccessI {
    user: Model<any>;
    jwt: string;
}
interface LoginFailedI {
    error: any;
}
export interface NMAServiceOptionsI {
    getUserProjection: Object;
    getUserOptions: Object;
}
export declare type NMALoginResponseType = LoginSuccessI | LoginFailedI;
export declare type NMAModuleSetupOptions = {
    userModel: Model<any>;
    serviceOptions: NMAServiceOptionsI;
    jwtOptions: JWTModuleSetupOptions;
};
export declare type JWTModuleSetupOptions = {
    secretKey: string;
    expiresIn: string;
};
export {};
