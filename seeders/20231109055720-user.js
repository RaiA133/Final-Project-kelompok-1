'use strict';
const bcrypt = require("bcrypt");
// const { v4: uuidv4 } = require('uuid');
const { uniqueId } = require('./factory/uniqueId');
const users = uniqueId();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const addUsers = [
      {
        user_role_id: 1,
        unique_id: users.user1,
        name: 'Raie Aswajjillah',
        username: 'R41iee',
        email: 'rai@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('123', 10),
        birth_date: '2003-11-23',
        birth_place: 'Bandung',
        about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, nemo? Rerum, quis natus sequi minus magnam, nostrum explicabo vero id quia illo ad voluptate? Vero sint asperiores illo quod itaque.',
        company: 'Rakamin Academy',
        job: 'Fullstack Web Dev',
        country: 'Indonesia',
        city: 'Bandung',
        address: 'Jl. Dago atas No.23',
        contact: '08123456789',
        web_link: 'https://raie-site.link',
        github_link: 'https://github.com/RaiA133',
        fb_link: 'https://www.facebook.com/zuck/?locale=id_ID',
        ig_link: 'https://www.instagram.com/zuck/',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_role_id: 2,
        unique_id: users.user2,
        name: 'Ikhsan',
        username: 'death_vader32',
        email: 'ikhsan@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('321', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_role_id: 2,
        unique_id: users.user3,
        name: 'Iffat',
        username: 'nbilIffat',
        email: 'nabil@gmail.com',
        img_profile: 'default.png',
        password: await bcrypt.hash('111', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    return queryInterface.bulkInsert('Users', addUsers, {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
