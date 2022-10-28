'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('pesquisas', [{
      titulo: 'Biblioteca Digital de Trabalhos de Conclusão de Curso Aprovados',
      tipo: 'Registro de Software',
      discenteId: 1,
      docenteId: 1,
      data_apresentacao: '12-20-2022',
      palavras_chave: 'Biblioteca Digital, Ciência Aberta, Acervo IFMS',
      resumo: 'Este trabalho tem como objetivo construir uma biblioteca digital para que a comunidade acadêmica do IFMS campus Nova Andradina tenha acesso mais rápido, transparente e democrático à produção científica. Ademais, espera-se que o sistema desenvolvido seja mais simples, usável e acessível do que outros sistemas mais complexos utilizados em grandes universidades, por exemplo.',
      url_download: 'c8519999-40e1-4ef5-9c2d-86981366ff5f',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('pesquisas', null, {})
  }
};
