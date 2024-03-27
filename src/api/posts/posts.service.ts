import { Injectable } from '@nestjs/common';
import { PostEntity } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private repo: Repository<PostEntity>,
  ) {}

  create(data: PostEntity, userId: string) {
    return this.repo.insert({
      ...data,
      user: { id: userId },
    });
  }
}
