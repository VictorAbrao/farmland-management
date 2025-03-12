import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerInterceptor } from './modules/logs/logger.interceptor';
import { LoggerService } from './modules/logs/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = app.get(LoggerService);
  app.useGlobalInterceptors(new LoggerInterceptor(logger));
  await app.listen(3000);
}
bootstrap();
