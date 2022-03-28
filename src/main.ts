import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { ValidationPipe } from './validation.pipe';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('PMSing Box API')
    .setDescription('The PMSing Box API description')
    .setVersion('1.0')
    .addTag('users', 'Users endpoints')
    .addTag('orders', 'Orders endpoints')
    .addTag('questionnaire', 'Questionnaire endpoints')
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, swaggerDoc);

  // global validation pipe
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
