module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Стрижки', picture: '/images/strizhki3.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Окрашивание', picture: '/images/okrashivanije.jpg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Укладка волос', picture: 'images/ykladka.jpg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Сложные причёски', picture: 'images/pricheski.jpg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Ногтевой сервис', picture: 'images/manikur.jpg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Брови и ресницы', picture: 'images/resnici.jpg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Макияж', picture: 'images/makeup.jpg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Пирсинг', picture: 'images/pirsing.jpg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Тату', picture: 'images/tatoo2.jpg', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories');
  },
};
