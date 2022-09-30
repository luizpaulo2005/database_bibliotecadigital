'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pesquisa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.discente, {as: "discente"}),
      this.belongsTo(models.docente, {as: "docente"})
    }
  }
  pesquisa.init({
    titulo: DataTypes.STRING,
    tipo: DataTypes.STRING,
    discenteId: DataTypes.INTEGER,
    docenteId: DataTypes.INTEGER,
    data_apresentacao: DataTypes.DATEONLY,
    palavras_chave: DataTypes.STRING,
    resumo: DataTypes.STRING,
    url_download: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pesquisa',
  });
  return pesquisa;
};