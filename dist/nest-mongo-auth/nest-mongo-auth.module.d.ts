import { DynamicModule } from "@nestjs/common";
import { NMAModuleSetupOptions } from "../interfaces";
export declare class NestMongoAuthModule {
    static forRoot(JWTModule: any, options: NMAModuleSetupOptions): DynamicModule;
}
