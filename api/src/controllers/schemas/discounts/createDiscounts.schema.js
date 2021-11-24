const joi = require('joi');
const schema = {
  body: joi.object().keys({
    tipo_descuento: joi.string().required(),
    porcentaje_descuento: joi.number().min(1).max(100).required(),
  }),
};

module.exports = { schema };
