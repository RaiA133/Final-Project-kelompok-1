'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post_handle_req extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post_handle_req.init({
    post_slug: DataTypes.TEXT,
    handle_req_unique_id: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Post_handle_req',
  });
  return Post_handle_req;
};