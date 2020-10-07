'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Tags", "tagId")
  },

  down: async (queryInterface, Sequelize) => {
  }
};
