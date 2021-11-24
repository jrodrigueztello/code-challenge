const Sequelize = require('sequelize');
const constants = require('../../constants');
const sequelize = require('../../database/database');
const { MODELS } = constants;
const Descuentos = sequelize.define(
  'descuentos',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo_descuento: {
      type: Sequelize.TEXT,
    },
    porcentaje_descuento: {
      type: Sequelize.INTEGER,
    },
  },
  { timestamps: false }
);

module.exports = Descuentos;
