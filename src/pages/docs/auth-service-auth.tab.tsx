import { Code, TabPane } from "../../components";

export const AuthServiceAuthTab = () => (
  <TabPane tabName="auth-service-auth">
    <h3>Auth Service</h3>
    <h4>
      For call .auth(...) you must have a mongodb model and middleware which set
      user id from bearer token.
    </h4>
    <h4>.auth() function take 2 parameteres:</h4>
    <h4>1 - model: MongoModel</h4>
    <h4>2 - id: String or ObjectId</h4>
    <h4>.auth(...) function return object:</h4>
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

@Injectable()
export class AppService {
  constructor(
    @InjectModel("UserModel") 
    private readonly userModel: Model<UserDocument>,
    private readonly nmaService: NestMongoAuthService
  ) {}

  async auth(id: string): Promise<any> {
    try {
      const data = await this.nmaService.auth(this.userModel, id);
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject("Error");
    }
  }
}
`}
    />
  </TabPane>
);
