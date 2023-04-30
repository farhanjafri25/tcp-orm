import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PostService } from './posts.repository';

@Controller()
export class PostController {
  constructor(private postService: PostService) {}
  @MessagePattern()
  async b() {
    return;
  }
}
