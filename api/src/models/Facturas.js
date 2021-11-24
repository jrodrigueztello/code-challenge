const Sequelize = require('sequelize');
const constants = require('../../constants');
const sequelize = require('../../database/database');
const { MODELS } = constants;
const Facturas = sequelize.define(
  MODELS.FACTURAS,
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_usuario: {
      type: Sequelize.INTEGER,
    },
    tipo_compra: {
      type: Sequelize.TEXT,
    },
    valor_compra: {
      type: Sequelize.FLOAT,
    },
    porcentaje_descuento: {
      type: Sequelize.FLOAT,
    },
    descuento_por_porcentaje: {
      type: Sequelize.FLOAT,
    },
    descuento_por_cada_cien: {
      type: Sequelize.FLOAT,
    },
    valor_descuento: {
      type: Sequelize.FLOAT,
    },
    valor_total: {
      type: Sequelize.FLOAT,
    },
  },
  { timestamps: false }
);

module.exports = Facturas;
