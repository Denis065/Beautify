module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('masterServices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      masterId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Masters',
          key: 'id',
        },
      },
      serviceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Services',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('masterServices');
  },
};
