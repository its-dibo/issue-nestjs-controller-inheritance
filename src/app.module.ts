import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './api/users/users.module';
import { PostsModule } from './api/posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(<TypeOrmModuleOptions>{
      // database info
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    PostsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
