## Q&A к проекту на React.js для Яндекс.Практикума

Вопросы:

- Можно ли упростить инфраструктуру проекта? Как бы вы посоветовали ее реорганизовать?
- Корректно ли написаны тесты для компонент? Корректно ли валидируются пропсы?
- Корректно ли выполняется рендер компонент?
- Правильно ли настроены все роуты, в том числе и защищенные?
- Оптимально ли написаны компоненты? Правильно ли выделены функциональные компоненты?
- Корректно ли описаны `Actions`, `Reducers`?

Ответы на вопросы находятся в файле index.js в папке src. Cheers, надеюсь все гуд 🖤

# Реализовано простое приложение, без подключения к БД.

## Задание:
Роуты:
+ `/` - главная
+ `/login` - страница ввода логина и пароля
+ `/profile` - страница с произвольным текстом, недоступная без авторизации
+ `/kvazavr` - 404

В шапке есть ссылки:

+ На главную (`/`)
+ Профиль (`/profile`)
+ Логин (`/login`)
+ 404 (`/kvazavr`)

Если url битый - редирект на `/kvazavr`

Если пользователь не авторизован -- перекидывает на страницу `/login`.
Моковые данные для входа: user: student, password: student

Если данные инвалидны, то:
Имя пользователя или пароль некорректны

Если данные валидны: редирект на `/profile`

