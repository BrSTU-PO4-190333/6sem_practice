'use strict';

// sequelize seed:create --name TP_Task

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
    await queryInterface.bulkInsert('TP_Tasks', [
      {
        RBUserId: 1,
        Name: 'Создать тестовый аккаунт',
        Description: 'В папке seeders создать определёный js файл',
        StartDate: new Date(),
        EndDate: new Date(),
        IsCompleted: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        RBUserId: 2,
        Name: 'Купить мороженое',
        Description: 'Выбрать мороженое в виде параллелепипеда',
        StartDate: new Date(),
        EndDate: new Date(),
        IsCompleted: false,
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
    await queryInterface.bulkDelete('TP_Tasks', null, {});
  },
};
