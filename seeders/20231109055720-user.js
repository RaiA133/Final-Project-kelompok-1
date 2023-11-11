"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
      async up(queryInterface, Sequelize) {
            const addUsers = [
                  {
                        name: "Raie Aswajjillah",
                        username: "R41iee",
                        email: "rai@gmail.com",
                        password: "123",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                  },
                  {
                        name: "Ikhsan",
                        username: "death_vader32",
                        email: "ikhsan@gmail.com",
                        password: "123",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                  },
                  {
                        name: "Iffat",
                        username: "nbilIffat",
                        email: "nabil@gmail.com",
                        password: "123",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                  },
            ];
            return queryInterface.bulkInsert("Users", addUsers, {});
      },

      async down(queryInterface, Sequelize) {
            return queryInterface.bulkDelete("Users", null, {});
      },
};
