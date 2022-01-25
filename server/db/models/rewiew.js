'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rewiew extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Rewiew.init({
    text: DataTypes.TEXT,
    name: DataTypes.TEXT,
    isValid: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Rewiew',
  });
  return Rewiew;
};