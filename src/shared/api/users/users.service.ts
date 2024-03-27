import { Injectable } from "@nestjs/common";
import { UserEntity } from "./entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    protected repo: Repository<UserEntity>
  ) {}

  findAll() {
    return this.repo.find();
  }
}
