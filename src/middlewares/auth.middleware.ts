import { Injectable, NestMiddleware } from "@nestjs/common";
import { Response } from "express";
import { JWTService } from "nest-jwt-module";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JWTService) {}

  async use(req: any, res: Response, next: Function) {
    const token = req.headers["Authorization"] || req.headers["authorization"];
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
