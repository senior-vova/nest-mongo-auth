import { Model } from "mongoose";
interface LoginSuccessI {
    user: Model<any>;
    jwt: string;
}
interface LoginFailedI {
    error: any;
}
export declare const NotInitError: Error;
export interface NMAServiceOptionsI {
    toTokenUserFields: Array<string>;
    getUserProjection: Object;
    getUserOptions: Object;
}
export interface NMAJWTOptionsI {
    secretKey: string;
    expiresIn: string;
}
export declare type NMALoginResponseType = LoginSuccessI | LoginFailedI;
export {};
