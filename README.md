# issue 

there is a many-to-many relationship between `PostEntity` and `UserEntity`
the `UserEntity` extends the shared `UserEntity` which extends `BasicEntity`

in src/api/posts/posts.service.ts:

```
  create(data: PostEntity, userId: string) {
    return this.repo.insert({
      ...data,
      user: { id: userId },
              ^
              | ----- Object literal may only specify known properties, and 'id' does not exist in type '(() => string) | _QueryDeepPartialEntity<UserEntity>'.ts(2353)

    });
  }
```

when adding `id` to either `UserEntity` or the shared `UserEntity`, 
or making the shared UserEntity doesn't extend from `BasicEntity` the issue disappears

```
// src/shared/dto/basic.entity.ts
export class BasicEntity {
  id: string;
}

// the shared UserEntity
// src/shared/api/users/entities/user.entity.ts
@Entity("users")
export class UserEntity extends BasicEntity {}

// src/api/users/entities/user.entity.ts
@Entity('users')
export class UserEntity extends _UserEntity {
  @OneToMany(() => PostEntity, (post) => post.user)
  posts: PostEntity[];
}


// src/api/posts/entities/post.entity.ts
@Entity('posts')
export class PostEntity extends BasicEntity {
  @Column({ type: 'text' })
  content: string;

  @ManyToOne(() => UserEntity, (users) => users.posts)
  user: UserEntity;
}

```






# reproduction

run `npm i` then `npm start`,
in app.module.ts add "database info"