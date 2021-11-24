const joi = require('joi');
const constants = require('../../../../constants');
const { BUY_TYPE } = constants;
const schema = {
  body: joi.object().keys({
    id_usuario: joi.number().required(),
    tipo_compra: joi.string().valid(BUY_TYPE.COMESTIBLES, BUY_TYPE.ELECTRODOMESTICO, BUY_TYPE.ROPA).required(),
    valor_compra: joi.number().required(),
  }),
};

module.exports = { schema };
