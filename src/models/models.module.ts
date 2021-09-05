import { Module } from "@nestjs/common";
import { UserSchema } from "./user.model";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      { name: "UserModel", useFactory: () => UserSchema },
    ]),
  ],
  exports: [
    MongooseModule.forFeatureAsync([
      { name: "UserModel", useFactory: () => UserSchema },
    ]),
  ],
})
export class ModelsModule {}
