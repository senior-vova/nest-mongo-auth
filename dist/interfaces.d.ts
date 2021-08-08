import { Model } from "mongoose";
interface LoginSuccessI {
    user: Model<any>;
    jwt: string;
}
interface LoginFailedI {
    error: any;
}
export declare type NMALoginResponseType = LoginSuccessI | LoginFailedI;
export declare type NMAModuleSetupOptions = {
    getUserProjection: Object;
    getUserOptions: Object;
};
export declare type JWTModuleSetupOptions = {
    secretKey: string;
    expiresIn: string;
};
export {};
