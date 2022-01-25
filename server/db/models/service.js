const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Category, Master, masterService, Reservation,
    }) { // ,Master
      this.belongsTo(Category, { foreignKey: 'categoryId' });
      this.belongsToMany(Master, { foreignKey: 'masterId', otherKey: 'serviceId', through: masterService });
      this.belongsToMany(Master, { foreignKey: 'masterId', otherKey: 'serviceId', through: Reservation });
      // define association here
    }

    // define association here
  }

  Service.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.TEXT,
    },
    categoryId: {
      type: DataTypes.TEXT,
      references: {
        model: 'Categories',
        key: 'id',
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.TEXT,
    },
    picture: {
      type: DataTypes.TEXT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};
