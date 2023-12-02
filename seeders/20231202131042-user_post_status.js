'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addUserPostStatus = [
      {
        post_slug: 'logo-design',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_slug: 'social-media-marketing',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_slug: 'video-editing',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_slug: 'virtual-assistant',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_slug: 'e-commerce-website-development',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_slug: 'english-translation-10',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_slug: 'data-analysis',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_slug: 'illustration-design',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_slug: 'product-photography',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_slug: 'business-consulting',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_slug: 'pengerjaan-web-gis',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_slug: 'big-dropdhipper-app',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_slug: 'travel-blog-writer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        post_slug: 'mobile-app-developer',
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
