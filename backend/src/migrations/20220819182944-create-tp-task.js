'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TP_Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      RBUserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      Name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      Description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      StartDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      EndDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      IsCompleted: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TP_Tasks');
  },
};
