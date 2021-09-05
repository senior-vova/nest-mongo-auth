import { Code, LinkBlank, TabPane } from "../../components";

export const GetStartedTab = () => (
  <TabPane tabName="get-started">
    <h3>Get Started</h3>
    <br />
    <h4>
      You can see demo on{" "}
      <LinkBlank
        link={"https://github.com/senior-vova/nest-mongo-auth/tree/demo"}
        text="github"
      />
      .
    </h4>
    <br />
    <h4>Before start working with a module, you must install it.</h4>
    <br />
    <h4>You can install using npm:</h4>
    <Code lang="bash" code={`npm install nest-mongo-auth`} />
    <h4>or yarn:</h4>
    <Code lang="bash" code={`yarn add nest-mongo-auth`} />
    <br />
    <h4>
      If you init nest application you must import Module in your module. <br />
      Ex: app.module.ts. But before do it, you must init MongoModule and create
      jwt module for NestMongoAuthModule. Create jwt.module.ts and add in this
      file next code:
    </h4>
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
    <h4>
      nest-jwt-module library we get from nest-mongo-auth module. You can read
      documentation about that module on this link:{" "}
      <LinkBlank
        link={"https://senior-vova.github.io/nest-jwt-module"}
        text={"Docs"}
      />
      .<br />
      Now we can use created JwtModule. <br />
      In app.module.ts add next code:
    </h4>
    <Code
      lang="tsx"
      code={`import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NestMongoAuthModule } from "nest-mongo-auth";
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
      }),
    }),
    NestMongoAuthModule.forRoot(JwtModule, {
      getUserProjection: {},
      getUserOptions: {},
    }),
    ModelsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
`}
    />
    <h4>
      This ModelsModule you can get from{" "}
      <LinkBlank
        link={
          "https://github.com/senior-vova/nest-mongo-auth/tree/demo/src/models"
        }
        text="demo"
      />{" "}
      github.
    </h4>
    <h4>
      If NestMongoAuthModule imported we can use this module service for login,
      auth and register
    </h4>
    <h4>
      Let's create a functions in the app.service.ts for user login and auth:
    </h4>
    <Code
      lang="tsx"
      code={`import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { NestMongoAuthService } from "nest-mongo-auth";
import { UserDocument } from "./models/user.model";
import * as sha1 from "sha1";
import { LoginBodyDto } from "./app.dto";

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
    <h4>And create route endpoints in app.controller.ts for auth and login:</h4>
    <Code
      lang="tsx"
      code={`import { Body, Controller, Get, Post, Req, Res } 
      from "@nestjs/common";
import { Response } from "express";
import { LoginBodyDto } from "./app.dto";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("auth")
  async auth(@Req() req: any, @Res() res: Response) {
    try {
      const resp = await this.appService.auth(req.user._id);
      return res.status(200).json(resp);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  @Post("login")
  async login(@Res() res: Response, @Body() body: LoginBodyDto) {
    try {
      const resp = await this.appService.login(body);
      return res.status(200).json(resp);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}
`}
    />
    <h4>
      But for /auth endpoint works we must add middleware (auth.middleware.ts):
    </h4>
    <Code
      lang="tsx"
      code={`import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response } from "express";
import { JWTService } from "nest-jwt-module";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JWTService) {}

  async use(req: any, res: Response, next: Function) {
    const token = 
      req.headers["Authorization"] || req.headers["authorization"];
    if (token) {
      try {
        const data = await this.jwtService.Verify(
          (token as string).replace("Bearer ", "")
        );
        if (data) {
          req.user = data.data;
        }
      } catch (error) {
        return res.status(500).json({ error: "Invalid token" });
      }
    }
    next();
  }
}
`}
    />
    <h4>And import it in app.module.ts:</h4>
    <Code
      lang="tsx"
      code={`import { MiddlewareConsumer, Module } from "@nestjs/common";
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
`}
    />
    <h4>
      Now if you send post request to /login or send get request to /auth but
      with bearer token you get next json:
    </h4>
    <Code
      lang="json"
      code={`{
  "user": {
    "_id": "610fd152812e023098af3417",
    "name": "test 1",
    "email": "test@gmail.com",
    "password": "158bf85edebfa383cd5e5660d8e2479ab274ecaf",
    ......
  },
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTBmZDE1MjgxMmUwMjMwOThhZjM0MTciLCJpYXQiOjE2MzA4NDY3MjAsImV4cCI6MTYzMDg4OTkyMH0.IBQlUubmmv1RLZkf0OeHzeEY3Xnk33lh5FPBmU6xb4Q"
}`}
    />
  </TabPane>
);
