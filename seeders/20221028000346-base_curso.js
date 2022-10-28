'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('cursos', [{
      nome: 'Técnico em Informática',
      grade: '2020',
      duracao: '3 Anos / 6 Semestres',
      campusId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cursos', null, {})
  }
};
