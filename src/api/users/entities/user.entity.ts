import { PostEntity } from 'src/api/posts/entities/post.entity';
import { Entity, OneToMany } from 'typeorm';
import { UserEntity as _UserEntity } from 'src/shared/api/users/entities/user.entity';

@Entity('users')
export class UserEntity extends _UserEntity {
  @OneToMany(() => PostEntity, (post) => post.user)
  posts: PostEntity[];
}
