'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addUserPostStatus = [
      {
        post_slug: "1-logo-design",
        status: "On Going",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_slug: '1-pengerjaan-web-gis',
        status: "On Going",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_slug: '2-big-dropdhipper-app',
        status: "On Going",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_slug: '3-travel-blog-writer',
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
