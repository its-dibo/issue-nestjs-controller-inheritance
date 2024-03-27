import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController as _UsersController } from 'src/shared/api/users/users.controller';

@Controller('users')
export class UsersController extends _UsersController {
  constructor(protected readonly usersService: UsersService) {
    super(usersService);
  }
}
