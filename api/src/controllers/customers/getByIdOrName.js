const logger = require('@condor-labs/logger');
const inputValidate = require('../../middlewares/inputValidation');
const { schema } = require('./../schemas/customers/getByIdOrName.schema');
const repo = require('../../repositories/customers/customerRepository');
const validate = inputValidate.validate(schema);

async function handler(req, res, next) {
  try {
    const { entity } = req.params;
    const { identify } = req.body;
    const response = await repo.getByIdorName(entity, identify);
    return res.status(200).send(response);
  } catch (e) {
    logger.error(e);
    return next(e);
  }
}

module.exports = [validate, handler];
