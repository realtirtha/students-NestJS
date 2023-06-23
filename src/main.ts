import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { StudentsModule } from './students/students.module';

async function bootstrap() {
  const app = await NestFactory.create(StudentsModule);

  app.useGlobalPipes(
    new ValidationPipe()
  );

  await app.listen(3000);


}
bootstrap();


