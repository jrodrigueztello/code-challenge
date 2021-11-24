const joi = require('joi');
const schema = {
  body: joi.object().keys({
    usuario: joi.string().required(),
    nombre_completo: joi.string().required(),
    tipo: joi.string().required(),
    fecha_registro: joi.date(),
  }),
};

module.exports = { schema };
