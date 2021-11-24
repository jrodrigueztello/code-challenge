const Sequelize = require('sequelize');
const constants = require('../../constants');
const sequelize = require('../../database/database');
const { MODELS } = constants;
const Users = sequelize.define(
  MODELS.USUARIOS,
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuario: {
      type: Sequelize.TEXT,
    },
    nombre_completo: {
      type: Sequelize.TEXT,
    },
    tipo: {
      type: Sequelize.TEXT,
    },
    fecha_registro: {
      type: Sequelize.DATE,
    },
  },
  { timestamps: false }
);

module.exports = Users;
