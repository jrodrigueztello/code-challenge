const Sequelize = require('sequelize');
const constants = require('../../../constants');
const Op = Sequelize.Op;
const Users = require('../../models/Usuarios');
const { VALUE_ENTITY } = constants;
const createCustomer = async ({ usuario, nombre_completo, tipo, fecha_registro }) => {
  const newUser = await Users.create({
    usuario,
    nombre_completo,
    tipo,
    fecha_registro,
  });
  return newUser;
};

const getByIdorName = (entity, identify) => {
  if (entity === VALUE_ENTITY.ID) {
    return Users.findByPk(identify);
  }
  return Users.findAll({ where: { nombre_completo: { [Op.like]: `%${identify}%` } } });
};

const repo = {
  createCustomer,
  getByIdorName,
};
module.exports = repo;
