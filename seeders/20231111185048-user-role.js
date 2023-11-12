"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
      async up(queryInterface, Sequelize) {
            const addusers_role = [
                  {
                        role: "Admin",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                  },
                  {
                        role: "User",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                  },
            ];
            return queryInterface.bulkInsert("users_role", addusers_role, {});
      },

      async down(queryInterface, Sequelize) {
            return queryInterface.bulkDelete("users_role", null, {});
      },
};
