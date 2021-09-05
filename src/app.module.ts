import { MiddlewareConsumer, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NestMongoAuthModule } from "nest-mongo-auth";
import { AuthMiddleware } from "./middlewares/auth.middleware";
import { MongooseModule } from "@nestjs/mongoose";
import { ModelsModule } from "./models/models.module";
import { JwtModule } from "./jwt.module";

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: "mongodb://localhost:27017/nma-test",
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }),
    }),
    JwtModule,
    NestMongoAuthModule.forRoot(JwtModule, {
      getUserProjection: {},
      getUserOptions: {},
    }),
    ModelsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes("*");
  }
}
