const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Service, masterService, Reservation }) {
      // this.hasMany(Service, {
      //   foreignKey: {
      //     type: DataTypes.Integer,
      //     allowNull: false,
      //   },
      // });
      // this.belongsTo(Service);
      this.belongsToMany(Service, { foreignKey: 'serviceId', otherKey: 'masterId', through: masterService });
      this.belongsToMany(Service, { foreignKey: 'serviceId', otherKey: 'masterId', through: Reservation });
      // define association here
    }
  }

  Master.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.TEXT,
    },
    category: {
      type: DataTypes.TEXT,
    },
    description: {
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
    modelName: 'Master',
  });
  return Master;
};
