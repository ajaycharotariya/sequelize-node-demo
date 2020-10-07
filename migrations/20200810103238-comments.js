'use strict';

module.exports = {
  up: async (queryInterface,DataTypes, Sequelize) => {
    await queryInterface.createTable('Comments', {
      username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
      },
      createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
      },
      updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
      },
      deletedAt: {
          type: DataTypes.DATE,
          allowNull: true
      }
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Comments');
  }
};
