import { ApiProperty } from "@nestjs/swagger";

export class LoginBodyDto {
  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;
}

export class RegisterBodyDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;
}
