'use strict';
const { uniqueId } = require('./factory/uniqueId');
const users = uniqueId();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const addChat = [
      {
        chat_unique_id: "asd1-dsa",
        userone_unique_id: users.user1,
        usertwo_unique_id: users.user2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chat_unique_id: "asd2-asd",
        userone_unique_id: users.user2,
        usertwo_unique_id: users.user3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        chat_unique_id: "asd3-dsa",
        userone_unique_id: users.user3,
        usertwo_unique_id: users.user1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    return queryInterface.bulkInsert("Chats", addChat, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Chats", null, {});
  }
};
