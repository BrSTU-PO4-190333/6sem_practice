'use strict';

const bcrypt = require('bcrypt');

// sequelize seed:create --name RB_User

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('RB_Users', [
      {
        Name: 'Тестовый аккаунт',
        Login: 'test',
        HashPassword: bcrypt.hashSync('test', 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        Name: 'Второй тестовый аккаунт',
        Login: 'test2',
        HashPassword: bcrypt.hashSync('test2', 7),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('RB_Users', null, {});
  },
};
