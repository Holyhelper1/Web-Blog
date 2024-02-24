Области хранения данных:

-   база данных на json-server
-   BFF
-   редакс стор

Сущности приложения:

-   пользователь: БД (список пользователей), BFF (сессия текущего), стор (отображение в браузере)
-   роль пользователя: БД (Список ролей), BFF (сессия пользователя с ролью), стор (использование на клиенте)
-   статья: БД (список статей), стор (отображение в браузере)
-   комментарий: БД (список комментариев), стор (отображение в браузере)

Таблицы БД:

-   пользователи - users: id / login / password / registed_at / role_id
-   роли - roles: id / name
-   статьи - posts: id / title / image_url / content / published_at
-   комментарий - coments: id / author_id / post_id / content

Схема состояния на BFF:

-   сессия текущего пользователя: login / password / role

Cхема для редакс стора (на клиенте):

-   user: id / login / role_id
-   posts: массив post: id / title / imageUrl / publeshedAt / commentsCount
-   post: id / title / imageUrl / content / publeshedAt / comments: массив comment: id / author / content / publeshedAt
-   users: массив user: id / login / registeredAt / role




