const logger = require('@condor-labs/logger');
const inputValidate = require('../../middlewares/inputValidation');
const { schema } = require('../schemas/discounts/createDiscounts.schema');
const validate = inputValidate.validate(schema);
const repo = require('../../repositories/discounts/discountsRepository');
async function handler(req, res, next) {
  try {
    const newDiscount = await repo.createDiscount(req.body);
    return res.status(200).send(newDiscount);
  } catch (e) {
    logger.error(e);
    return next(e);
  }
}

module.exports = [validate, handler];
