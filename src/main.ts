import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/exception-filter/http.exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // 요청에서 넘어온 자료들을 원하는 실제 타입으로 변환
      transformOptions: {
        enableImplicitConversion: true, // string -> number 같은 변환이 자동으로 이루어지게 함
      },
      whitelist: true, // 요청에서 넘어온 값들 중에서 decorator가 없는 값들은 제거
      forbidNonWhitelisted: true, // whitelist에 없는 값이 들어오면 에러 발생
    }),
  );

  // app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000);
}
bootstrap();
