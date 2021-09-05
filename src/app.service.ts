import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { NestMongoAuthService } from "nest-mongo-auth";
import { UserDocument } from "./models/user.model";
import * as sha1 from "sha1";
import { LoginBodyDto, RegisterBodyDto } from "./app.dto";

@Injectable()
export class AppService {
  constructor(
    @InjectModel("UserModel") private readonly userModel: Model<UserDocument>,
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

  async register(body: RegisterBodyDto): Promise<any> {
    try {
      const data = await this.userModel.create({
        name: body.name,
        email: body.email,
        password: this.sha(body.password),
      });
      return Promise.resolve(data);
    } catch (error) {
      return Promise.reject("Error");
    }
  }

  private sha(pass: string) {
    return sha1(`dopawdaowipnd${pass}ipawindioqndioawdoin`);
  }
}
