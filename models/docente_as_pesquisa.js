'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class docente_as_pesquisa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  docente_as_pesquisa.init({
    docenteId: DataTypes.INTEGER,
    pesquisaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'docente_as_pesquisa',
  });
  return docente_as_pesquisa;
};