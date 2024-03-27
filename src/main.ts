import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

NestFactory.create<NestFastifyApplication>(
  AppModule,
  new FastifyAdapter(),
).then((app) => app.listen(3000));
