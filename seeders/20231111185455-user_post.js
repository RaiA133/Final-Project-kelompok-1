'use strict';
const { uniqueId } = require('./factory/uniqueId');
const users = uniqueId();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const addUser_posts = [
      {
        unique_id: users.user1,
        post_img: "image1.jpg",
        post_title: "Pencari Jodoh",
        post_desc: "Mencari pasangan wanita yang setia",
        post_category: "Website",
        post_tags: "Pariwisata",
        min_price: "Rp. 1.000.000",
        max_price: "Rp. 2.000.000",
        post_worktime: "30 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user1,
        post_img: "image2.jpg",
        post_title: "Pengerjaan Web GIS",
        post_desc: "Bisa membuat seperti Google Maps",
        post_category: "GIS",
        post_tags: "Teknologi",
        min_price: "Rp. 7.000.000",
        max_price: "Rp. 10.000.000",
        post_worktime: "14 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user2,
        post_img: "image3.jpg",
        post_title: "Travel Blog Writer",
        post_desc: "Menulis pengalaman perjalanan",
        post_category: "Content Creation",
        post_tags: "Travel",
        min_price: "Rp. 2.000.000",
        max_price: "Rp. 5.000.000",
        post_worktime: "21 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user2,
        post_img: "image4.jpg",
        post_title: "Freelance Graphic Designer",
        post_desc: "Desain grafis kreatif",
        post_category: "Design",
        post_tags: "Art",
        min_price: "Rp. 2.000.000",
        max_price: "Rp. 7.000.000",
        post_worktime: "10 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user2,
        post_img: "image5.jpg",
        post_title: "Social Media Manager",
        post_desc: "Mengelola akun media sosial",
        post_category: "Marketing",
        post_tags: "Social Media",
        min_price: "Rp. 1.000.000",
        max_price: "Rp. 2.000.000",
        post_worktime: "15 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user3,
        post_img: "image6.jpg",
        post_title: "E-book Editor",
        post_desc: "Mengedit naskah e-book",
        post_category: "Editing",
        post_tags: "Literature",
        min_price: "Rp. 4.000.000",
        max_price: "Rp. 5.000.000",
        post_worktime: "20 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unique_id: users.user3,
        post_img: "image7.jpg",
        post_title: "Fitness Trainer",
        post_desc: "Pelatihan kebugaran",
        post_category: "Health",
        post_tags: "Fitness",
        min_price: "Rp. 6.000.000",
        max_price: "Rp. 8.000.000",
        post_worktime: "25 Days",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
    return queryInterface.bulkInsert('User_posts', addUser_posts, {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User_posts', null, {})
  }
};