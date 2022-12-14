# API сервиса вишлистов КупиПодариДай
Бэкенд сервиса вишлистов КупиПодариДай

## Stack
- [описание API сервиса](https://app.swaggerhub.com/apis/zlocate/KupiPodariDay/1.0.0)
- TypeScript в качестве основного языка проекта
- PostgreSQL для хранения данных
- Nest.js

## Функционал
В сервисе каждый зарегистрированный пользователь может рассказать о том, какой подарок он бы хотел получить, а также скинуться на подарок для другого пользователя, указав сумму, которую готов на это потратить.

Без регистрации доступен просмотр главной с лентой подарков (40 последних и 20 популярных подарков).

После регистрации:
- добавление или изменение (только если никто еще не скинулся) подарков
- редактирование профиля
- просмотр профилей и "хотелок" других пользователей
- поиск пользователей по имени пользователя или почте
- заявка для желающих скинуться на подарок
- копирование подарка
## Создание базы данных
```bash
CREATE USER student WITH PASSWORD 'student';
```
```bash
CREATE DATABASE kupipodariday;
```
```bash
GRANT ALL PRIVILEGES ON DATABASE kupipodariday TO student;
```
## Локальный запуск

Клонируйте репозиторий
```bash
  git clone https://github.com/nrths/kupipodariday-backend.git
```

Перейдите в директорию проекта
```bash
  cd kupipodariday-backend
```

Установите зависимости
```bash
  npm install
```

Запустите приложение в режиме разработки
```bash
  npm run start:dev
```
Для проверки работоспособности приложения изпользуйте [Postman](https://www.postman.com/downloads/)
## Improvement plans

- Добавить авторизацию по YandexID
- Добавить e-mail рассылку, когда сумма на подарок собрана
