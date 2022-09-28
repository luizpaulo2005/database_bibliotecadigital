'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pesquisas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      alunosId: {
        type: Sequelize.INTEGER,
        references: {model:"discentes", key:"id"}
      },
      orientadorId: {
        type: Sequelize.INTEGER,
        references: {model: "docentes", key:"id"}
      },
      data_apresentacao: {
        type: Sequelize.DATE
      },
      palavras_chave: {
        type: Sequelize.STRING
      },
      resumo: {
        type: Sequelize.STRING
      },
      url_download: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pesquisas');
  }
};