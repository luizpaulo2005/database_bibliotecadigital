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
      this.belongsTo(models.matricula, {as: "matricula"})
    }
  }
  discente.init({
    nome: DataTypes.STRING,
    matriculaId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    cpf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'discente',
  });
  return discente;
};