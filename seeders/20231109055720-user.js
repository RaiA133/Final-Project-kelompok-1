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
