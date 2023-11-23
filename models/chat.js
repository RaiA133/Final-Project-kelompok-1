'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  chat.init({
    chat_unique_id: DataTypes.STRING,
    userone_unique_id: DataTypes.STRING,
    usertwo_unique_id: DataTypes.STRING,
    friend: DataTypes.BOOLEAN,
    last_message: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return chat;
};