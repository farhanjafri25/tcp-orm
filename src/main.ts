import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { INestMicroservice, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const microServiceOptions = {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 3000,
    },
  };
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'cats_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
