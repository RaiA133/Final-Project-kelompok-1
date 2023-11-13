'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_post.init({
    unique_id: DataTypes.INTEGER,
    post_img: DataTypes.STRING,
    post_title: DataTypes.STRING,
    post_desc: DataTypes.STRING,
    post_category: DataTypes.STRING,
    post_tags: DataTypes.STRING,
    post_deadline: DataTypes.STRING,
    post_pricing: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_post',
  });
  return User_post;
};