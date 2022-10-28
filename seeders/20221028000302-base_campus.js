'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('campuses', [{
      nome: 'Nova Andradina',
      cidade: 'Nova Andradina',
      estado: 'MS',
      email: 'ifms.na@ifms.edu.br',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('campuses', null, {})
  }
};
