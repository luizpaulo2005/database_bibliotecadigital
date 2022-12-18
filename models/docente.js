'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class docente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany(models.pesquisa, {as: "pesquisas"})
      this.belongsToMany(models.pesquisa, { through: "docente_as_pesquisa", as: "pesquisas" });
    }
  }
  docente.init({
    nome: DataTypes.STRING,
    siape: DataTypes.STRING,
    email: DataTypes.STRING,
    data_nascimento: DataTypes.DATEONLY,
    cpf: DataTypes.STRING,
    formacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'docente',
  });
  return docente;
};