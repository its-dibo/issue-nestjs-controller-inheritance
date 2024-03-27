import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService as _UsersService } from 'src/shared/api/users/users.service';

@Injectable()
export class UsersService extends _UsersService {
  constructor(
    @InjectRepository(UserEntity)
    protected repo: Repository<UserEntity>,
  ) {
    super(repo);
  }
}
