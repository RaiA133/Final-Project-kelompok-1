'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        nique:true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      unique_id: {
        allowNull: true,
        type: Sequelize.STRING
      },
      slug: {
        allowNull: true,
        nique:true,
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
      min_price: {
        allowNull: true,
        type: Sequelize.STRING
      },
      max_price: {
        allowNull: true,
        type: Sequelize.STRING
      },
      post_worktime: {
        allowNull: true,
        type: Sequelize.STRING
      },
      post_expired_in: {
        allowNull: true,
        type: Sequelize.DATE
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