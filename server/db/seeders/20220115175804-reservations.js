module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Reservations', [
      {
        clientName: 'Ксения', clientNumber: '89116663000', masterId: 1, price: '1500', serviceId: 1, time: '13:00', date: '2022-10-10', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        clientName: 'Артем', clientNumber: '89218886438', masterId: 3, price: '7000', serviceId: 2, time: '15:00', date: '2022-01-01', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        clientName: 'Иннокентий', clientNumber: '89218811228', masterId: 2, price: '2000', serviceId: 2, time: '15:00', date: '2022-02-02', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        clientName: 'Андрей', clientNumber: 10, masterId: 6, serviceId: 2, time: '16:00', date: new Date(), createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reservations');
  },
};
