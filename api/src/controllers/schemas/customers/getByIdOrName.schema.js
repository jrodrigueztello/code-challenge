const joi = require('joi');
const constants = require('../../../../constants');
const { VALUE_ENTITY } = constants;
const schema = {
  params: {
    entity: joi.string().valid(VALUE_ENTITY.ID, VALUE_ENTITY.NOMBRE).required(),
  },
  body: joi.object().keys({
    identify: joi.string().required(),
  }),
};

module.exports = { schema };
