'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matricula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.curso, {as: "curso"}),
      this.hasMany(models.discente, {as: "discentes"})
    }
  }
  matricula.init({
    data_inicio: DataTypes.DATE,
    cursoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'matricula',
  });
  return matricula;
};