'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RB_Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Name: {
        type: Sequelize.STRING,
      },
      Email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      Login: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      HashPassword: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('RB_Users');
  },
};
