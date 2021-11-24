const Descuentos = require('../../models/Descuentos');

const createDiscount = async ({ tipo_descuento, porcentaje_descuento }) => {
  const newDiscount = await Descuentos.create({
    tipo_descuento,
    porcentaje_descuento,
  });
  return newDiscount;
};

const getPercentajeByType = async (type) => {
  const response = await Descuentos.findOne({ where: { tipo_descuento: type.toUpperCase() } });
  const percentage = response && response.dataValues ? response.dataValues.porcentaje_descuento : 0;
  return percentage;
};

const repo = {
  createDiscount,
  getPercentajeByType,
};
module.exports = repo;
