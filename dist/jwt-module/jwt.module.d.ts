import { DynamicModule } from "@nestjs/common";
import { JWTModuleSetupOptions } from "src/interfaces";
export declare class JWTModule {
    static forRoot(options: JWTModuleSetupOptions): DynamicModule;
}
