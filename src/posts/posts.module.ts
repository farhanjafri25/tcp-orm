import { Module } from '@nestjs/common';
import { PostController } from './posts.controller';
import { PostService } from './posts.repository';
import { PostRepository } from './posts.service';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PostService, PostRepository],
  exports: [PostService, PostRepository],
})
export class PostModule {}
