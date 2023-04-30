import { Module } from '@nestjs/common';
import { CommentController } from './comments.controller';
import { CommentRepository } from './comments.repository';
import { CommentsService } from './commets.service';

@Module({
  imports: [],
  controllers: [CommentController],
  providers: [CommentRepository, CommentsService],
  exports: [CommentRepository, CommentsService],
})
export class CommentModule {}
