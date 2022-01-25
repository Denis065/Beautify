const bcrypt = require('bcrypt');

const generateHashPass = (password) => bcrypt.hashSync(password, 10);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Clients', [
      {
        login: 'Admin', password: generateHashPass('123456789'), telephone: '+79162834244', isAdmin: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        login: 'Ksushka', password: generateHashPass('00000'), telephone: '+79210000000', isAdmin: false, createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Clients');
  },
};
