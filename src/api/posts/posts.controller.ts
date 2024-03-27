import { Body, Controller, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostEntity } from './entities/post.entity';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('posts')
export class PostsController {
  constructor(private readonly service: PostsService) {}

  @Post()
  @ApiCreatedResponse({ type: PostEntity })
  create(@Body() data: PostEntity) {
    return this.service.create(data, '123');
  }
}
