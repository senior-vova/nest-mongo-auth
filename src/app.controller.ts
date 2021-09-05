import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { Response } from "express";
import { LoginBodyDto, RegisterBodyDto } from "./app.dto";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiBearerAuth()
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

  @Post("register")
  async register(@Res() res: Response, @Body() body: RegisterBodyDto) {
    try {
      const resp = await this.appService.register(body);
      return res.status(200).json(resp);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}
