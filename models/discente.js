'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class discente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.matricula, {as: "matricula"}),
      this.hasMany(models.pesquisa, {as: "pesquisas"})
    }
  }
  discente.init({
    nome: DataTypes.STRING,
    matriculaId: DataTypes.BIGINT,
    email: DataTypes.STRING,
    data_nascimento: DataTypes.DATEONLY,
    cpf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'discente',
  });
  return discente;
};