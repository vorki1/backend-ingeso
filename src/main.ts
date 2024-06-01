import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   // Habilitar CORS
   app.enableCors({
    origin: 'http://localhost:3001', // URL del frontend
    credentials: true,
  });


  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
