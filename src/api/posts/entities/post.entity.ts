import { UserEntity } from 'src/api/users/entities/user.entity';
import { BasicEntity } from 'src/shared/dto/basic.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('posts')
export class PostEntity extends BasicEntity {
  @Column({ type: 'text' })
  content: string;

  @ManyToOne(() => UserEntity, (users) => users.posts)
  user: UserEntity;
}
