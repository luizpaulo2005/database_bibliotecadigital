'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class campus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.curso, {as:"cursos"})
    }
  }
  campus.init({
    nome: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'campus',
  });
  return campus;
};