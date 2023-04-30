import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CommentsService } from './commets.service';

@Controller()
export class CommentController {
  constructor(private readonly commentService: CommentsService) {}
  @MessagePattern()
  async b() {
    return;
  }
}
