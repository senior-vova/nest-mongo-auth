import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

const PORT = process.env.PORT || 3003;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    logger: ["warn", "error"],
  });
  const options = new DocumentBuilder()
    .setTitle("NMA test API doc")
    .setDescription("The NMA API description")
    .setVersion("1.0")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api/docs", app, document);
  await app.listen(PORT);
}
bootstrap().then(() => {
  console.info("Server is started on port:", PORT);
  console.info("Swagger url is:", `http://localhost:${PORT}/api/docs`);
});
