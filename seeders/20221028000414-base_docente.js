'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('docentes', [{
      nome: 'Rodrigo Silva Duran',
      siape: 1,
      email: 'rodrigo.duran@ifms.edu.br',
      data_nascimento: '01-01-1999',
      cpf: '00000000000',
      formacao: 'Ciências da Computação',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('docentes', null, {})
  }
};
