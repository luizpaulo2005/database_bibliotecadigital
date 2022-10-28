'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('discentes', [{
      nome: 'Luiz Paulo Rodrigues da Silva Santos',
      matriculaId: 2020101300034,
      email: 'luiz.santos15@estudante.ifms.edu.br',
      data_nascimento: '07-21-2005',
      cpf:'04399966190',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('discentes', null, {})
  }
};
