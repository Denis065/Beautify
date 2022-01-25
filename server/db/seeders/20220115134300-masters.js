module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Masters', [
      {
        name: 'Оксана', category: 'ногтевой сервис', picture: 'images/oksana.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Алиса', category: 'ногтевой сервис', picture: 'images/alice.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Анатолий', category: 'ногтевой сервис', picture: 'images/tolya.jpg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Владимир', category: 'стрижки, окрашивание, сложные причёски, укладка волос', picture: 'images/vladimir.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Мария', category: 'стрижки, окрашивание, сложные причёски, укладка волос', picture: 'images/mary.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Алекс', category: 'стрижки, сложные причёски, укладка волос', picture: 'images/alex.jpg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Арина', category: 'окрашивание, сложные причёски, укладка волос', picture: 'images/arina.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Елена', category: 'макияж', picture: 'images/elena.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Элеонора', category: 'макияж', picture: 'images/nora.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Николя', category: 'макияж', picture: 'images/nicola.jpg', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Анастасия', category: 'брови и ресницы', picture: 'images/anastasia.png', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Роман', category: 'пирсинг, тату', picture: 'images/roman.png', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Masters');
  },
};
