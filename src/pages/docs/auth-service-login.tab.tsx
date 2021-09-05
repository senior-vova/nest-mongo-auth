import { Code, TabPane } from "../../components";

export const AuthServiceLoginTab = () => (
  <TabPane tabName="auth-service-login">
    <h3>Auth Service - Login</h3>
    <h4>For call .login(...) you must have a mongodb model.</h4>
    <h4>.login() function take 2 parameteres:</h4>
    <h4>1 - model: MongoModel</h4>
    <h4>2 - validate data: Object</h4>
    <h4>.login(...) function return object:</h4>
    <Code
      lang="json"
      code={`{
  "user": {
    // user data
  },
  "jwt": "<token>"
}`}
    />
    <h4>Example:</h4>
    <Code
      lang="tsx"
      code={`import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { NestMongoAuthService } from "nest-mongo-auth";
import { UserDocument } from "./models/user.model";
import * as sha1 from "sha1";

class LoginBodyDto {
  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;
}

@Injectable()
export class AppService {
  constructor(
    @InjectModel("UserModel") 
    private readonly userModel: Model<UserDocument>,
    private readonly nmaService: NestMongoAuthService
  ) {}

  async login(body: LoginBodyDto): Promise<any> {
    try {
      const data = await this.nmaService.login(this.userModel, {
        email: body.email,
        password: this.sha(body.password),
      });
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject("Error");
    }
  }

  private sha(pass: string) {
    return sha1(\`dopawdaowipnd\${pass}ipawindioqndioawdoin\`);
  }
}
`}
    />
  </TabPane>
);
