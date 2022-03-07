'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pregunta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pregunta.init({
    nombre: DataTypes.STRING,
    interrogacion: DataTypes.STRING,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pregunta',
  });
  return Pregunta;
};