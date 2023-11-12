'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addUser_posts = [{
      unique_id: 1,
      post_img: "image.jpg",
      post_title: "Pencari Jodoh",
      post_desc: "Mencari pasangan wanita yang setia",
      post_category: "Website",
      post_tags: "Pariwisata",
      post_deadline: "30 Hari",
      post_pricing: "Rp. 2.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      unique_id: 1,
      post_img: "image.jpg",
      post_title: "Pengerjaan Web GIS",
      post_desc: "bisa membuat seperti google maps",
      post_category: "GIS",
      post_tags: "Teknologi",
      post_deadline: "14 Hari",
      post_pricing: "Rp. 10.000.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]
  return queryInterface.bulkInsert('user_posts', addUser_posts, {})
},

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('user_posts', null, {})
  }
};
