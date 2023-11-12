'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addUsers = [
      {
        user_role_id: 2,
        unique_id: uuidv4(),
        name: 'Raie Aswajjillah',
        username: 'R41iee',
        email: 'rai@gmail.com',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_role_id: 2,
        unique_id: uuidv4(),
        name: 'Ikhsan',
        username: 'death_vader32',
        email: 'ikhsan@gmail.com',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_role_id: 2,
        unique_id: uuidv4(),
        name: 'Iffat',
        username: 'nbilIffat',
        email: 'nabil@gmail.com',
        password: '123',
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
