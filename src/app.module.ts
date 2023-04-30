import { Module } from '@nestjs/common';
import { APP_GUARD, RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessTokenGuard } from './common/guards';
import { mongoConfig } from './database/typeorm.config';
import { env } from './env';
import { UserModule } from './users/users.module';
import { PostModule } from './posts/posts.module';
import { CommentModule } from './comments/comment.module';
import { BaseModule } from './base/base.module';
@Module({
  imports: [
    MongooseModule.forRoot(env.mongoDb.uri, {
      dbName: env.mongoDb.database,
    }),
    RouterModule.register([
      {
        path: '/user',
        module: UserModule,
      },
      {
        path: '/post',
        module: PostModule,
      },
      {
        path: '/comment',
        module: CommentModule,
      },
    ]),
    UserModule,
    PostModule,
    CommentModule,
    BaseModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
    AppService,
  ],
})
export class AppModule {}
