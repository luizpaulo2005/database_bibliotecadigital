'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('docente_as_pesquisas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      docenteId: {
        type: Sequelize.INTEGER
      },
      pesquisaId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    }, 
    {
      indexes:[{ 
        unique: true, 
        fields:['docenteId', 'pesquisaId'] 
      }]
    }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('docente_as_pesquisas');
  }
};