'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addUserPostStatus = [
      {
        id: "1-logo-design",
        status: "On Going",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '1-pengerjaan-web-gis',
        status: "On Going",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2-big-dropdhipper-app',
        status: "On Going",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3-travel-blog-writer',
        status: "On Going",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return queryInterface.bulkInsert("User_post_statuses", addUserPostStatus, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("User_post_statuses", null, {});
  }
};
