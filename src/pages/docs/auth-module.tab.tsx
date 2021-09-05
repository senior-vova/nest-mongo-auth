import { Code, TabPane } from "../../components";

export const AuthModuleTab = () => (
  <TabPane tabName="auth-module">
    <h3>Auth Module</h3>
    <Code
      lang="tsx"
      code={`import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NestMongoAuthModule } from "nest-mongo-auth";
import { JwtModule } from "./jwt.module";

@Module({
  imports: [
    .....
    NestMongoAuthModule.forRoot(JwtModule, {
      getUserProjection: {},
      getUserOptions: {},
    }),
    .....
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
`}
    />
  </TabPane>
);
