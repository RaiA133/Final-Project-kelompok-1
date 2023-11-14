'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      unique_id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      post_img: {
        allowNull: true,
        type: Sequelize.STRING
      },
      post_title: {
        allowNull: true,
        type: Sequelize.STRING
      },
      post_desc: {
        allowNull: true,
        type: Sequelize.STRING
      },
      post_category: {
        allowNull: true,
        type: Sequelize.STRING
      },
      post_tags: {
        allowNull: true,
        type: Sequelize.STRING
      },
      post_deadline: {
        allowNull: true,
        type: Sequelize.STRING
      },
      post_pricing: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User_posts');
  }
};