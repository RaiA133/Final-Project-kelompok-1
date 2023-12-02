'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User_post_statuses', {
      no: {
        allowNull: false,
        unique: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      id: { 
        allowNull: true,
        unique: true,
        primaryKey: true,
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.ENUM("On Going", "Already Taken"),
        defaultValue: "On Going",
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
    await queryInterface.dropTable('User_post_statuses');
  }
};