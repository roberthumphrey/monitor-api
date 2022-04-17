import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
     const app = await NestFactory.create(AppModule);
     app.setGlobalPrefix('/v1');
     app.enableCors({
          origin: '*',
          credentials: true
     })

     await app.listen(process.env.PORT || '80');
}

bootstrap();
