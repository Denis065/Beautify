## Beautifier
### Web-приложение для салона красоты

Данное приложение разработано для салона красоты Beautifier. Оно включает в себя клиентскую часть и панель управления. Заказчик хотел получить современное, функциональное веб-приложение с возможностью бронирования услуг потенциальным клиентам через специальную форму, с последующим оповещением смс-сообщений, с возможностью отменить свою запись через личный кабинет, а так же оставить отзыв о полученном сервисе прямо на сайте в разделе отзывы. Со стороны администратора в функционал заложены: учет всех бронирований и возможность их редактирования, модерация поступающих отзывов, возможность изменения пароля.


- Блок оснавной страницы
![](/readme/main.png)

- Информационный блок
![](/readme/info.png)

- Страница с формой бронирования даты на свободные даты и времени
![](/readme/reservation.png)

- Просмотр актуальных бронирований, с возможностью изменить состояние бронирования или удалить его
![](/readme/admin cabinet.png)

## Стек технологий:
JavaScript

**DB**: PostgreSQL, Sequelize ORM

**Back**: Node.js, Express, Sessions, Bcrypt, Cors

**Front**: React + Redux, Redux Saga, HTML5, SCSS/CSS, UI Kit

## Планы развития:
* Полнофункциональное внедрение оплаты
* Адаптация приложения под все виды устройств

### Установка:
В директории 2 папки:
* **server/** Отвечает за back-end. 
   * cd server
   * npm ci
   * npx sequelize db:create
   * npx sequelize db:migrate
   * npx sequelize db:seed:all
   * npm run dev
* **client/** - front-end. 
   * cd client 
   * npm ci
   * npm start