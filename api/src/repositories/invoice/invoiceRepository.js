const constants = require('../../../constants');
const Facturas = require('../../models/Facturas');
const Users = require('../../models/Usuarios');
const repoDiscounts = require('../discounts/discountsRepository');
const { BUY_TYPE, TYPE_USUARIO } = constants;
const createInvoice = async ({ id_usuario, tipo_compra, valor_compra }) => {
  let user = await await Users.findByPk(id_usuario);
  user = user && user.dataValues ? user.dataValues : null;
  if (!user) {
    throw Error('User no found');
  }
  let totalValueinvoice = 0;
  const percentageValue = await getDiscountPercentage(user);
  const discountsByPercentage = percentageValue > 0 ? valor_compra / percentageValue : 0;
  totalValueinvoice = valor_compra - discountsByPercentage;
  let discountByOneHundredDolar = 0;
  if (tipo_compra !== BUY_TYPE.COMESTIBLES) {
    discountByOneHundredDolar = getDiscountByOneHundredDolars(totalValueinvoice);
  }
  totalValueinvoice = totalValueinvoice - discountByOneHundredDolar;
  const totalDiscounts = discountsByPercentage + discountByOneHundredDolar;
  const newInvoice = await Facturas.create({
    id_usuario,
    tipo_compra,
    valor_compra,
    porcentaje_descuento: percentageValue,
    descuento_por_porcentaje: discountsByPercentage,
    descuento_por_cada_cien: discountByOneHundredDolar,
    valor_descuento: totalDiscounts,
    valor_total: totalValueinvoice,
  });

  return newInvoice;
};

const getDiscountPercentage = async (user) => {
  if (user.tipo === TYPE_USUARIO.AFILIADO) {
    return await getPercentageAffiliate(user.tipo);
  } else if (user.tipo === TYPE_USUARIO.EMPLEADO) {
    return await getPercentageEmployee(user.tipo);
  }
  return await getPercentageClientTwoYears(user);
};

const getPercentageAffiliate = async (affiliate) => {
  return await repoDiscounts.getPercentajeByType(affiliate);
};

const getPercentageEmployee = async (employee) => {
  return await repoDiscounts.getPercentajeByType(employee);
};

const getPercentageClientTwoYears = async (user) => {
  const isClientSince = getYearsByDateRange(user.fecha_registro);
  if (isClientSince >= 2) {
    return repoDiscounts.getPercentajeByType(user.tipo);
  }
  return 0;
};

const getDiscountByOneHundredDolars = (dolars) => {
  const discountedDolars = Math.trunc(dolars / 100);
  return discountedDolars * 5;
};

const getYearsByDateRange = (date) => {
  const today = new Date();
  const past = new Date(date);
  const diff = Math.floor(today.getTime() - past.getTime());
  const day = 1000 * 60 * 60 * 24;
  const days = Math.floor(diff / day);
  const months = Math.floor(days / 31);
  const years = Math.floor(months / 12);
  return years;
};

const repo = {
  createInvoice,
};
module.exports = repo;
