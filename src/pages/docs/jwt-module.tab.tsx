import { Code, TabPane } from "../../components";

export const JwtModuleTab = () => (
  <TabPane tabName="jwt-module">
    <h3>Jwt Module</h3>
    <Code
      lang="tsx"
      code={`import { Module } from "@nestjs/common";
import { JWTModule } from "nest-jwt-module";

@Module({
  imports: [
    JWTModule.forRoot({
      secretKey: "nma-test",
      expiresIn: "12h",
    }),
  ],
  exports: [JWTModule],
})
export class JwtModule {}
`}
    />
  </TabPane>
);
