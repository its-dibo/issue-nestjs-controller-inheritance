# issue 

in src/api/posts/posts.service.ts

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

run `npm i` then `npm start`