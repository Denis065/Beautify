module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('masterServices', [
      {
        masterId: '1', serviceId: '13', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '1', serviceId: '14', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '1', serviceId: '15', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '2', serviceId: '13', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '2', serviceId: '14', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '2', serviceId: '15', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '3', serviceId: '13', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '3', serviceId: '14', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '3', serviceId: '15', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '1', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '4', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '5', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '6', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '7', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '8', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '9', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '10', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '11', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '4', serviceId: '12', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '5', serviceId: '1', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '5', serviceId: '2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '5', serviceId: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '5', serviceId: '4', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '5', serviceId: '5', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '5', serviceId: '6', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '5', serviceId: '7', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '5', serviceId: '8', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '5', serviceId: '9', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '5', serviceId: '10', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '5', serviceId: '11', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '5', serviceId: '12', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '6', serviceId: '1', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '6', serviceId: '2', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '6', serviceId: '3', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '6', serviceId: '4', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '6', serviceId: '9', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '6', serviceId: '10', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '6', serviceId: '11', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '6', serviceId: '12', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '7', serviceId: '6', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '7', serviceId: '7', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '7', serviceId: '8', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '7', serviceId: '9', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '7', serviceId: '10', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '7', serviceId: '11', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '7', serviceId: '12', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '8', serviceId: '21', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '8', serviceId: '22', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '8', serviceId: '23', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '8', serviceId: '24', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '9', serviceId: '21', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '9', serviceId: '22', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '9', serviceId: '23', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '9', serviceId: '24', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '10', serviceId: '21', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '10', serviceId: '22', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '10', serviceId: '23', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '10', serviceId: '24', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '11', serviceId: '16', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '11', serviceId: '17', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '11', serviceId: '18', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '11', serviceId: '19', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '11', serviceId: '20', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '12', serviceId: '25', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '12', serviceId: '26', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '12', serviceId: '27', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '12', serviceId: '28', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '12', serviceId: '28', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '12', serviceId: '29', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '12', serviceId: '30', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '12', serviceId: '31', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '12', serviceId: '32', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        masterId: '12', serviceId: '33', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('masterServices');
  },
};
