'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_post_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_post_status.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_post_status',
  });
  return User_post_status;
};