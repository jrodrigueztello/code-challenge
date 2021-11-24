const logger = require('@condor-labs/logger');
const inputValidate = require('../../middlewares/inputValidation');
const { schema } = require('../schemas/customers/createUser.schema');
const validate = inputValidate.validate(schema);
const repo = require('../../repositories/customers/customerRepository');
async function handler(req, res, next) {
  try {
    const newUser = await repo.createCustomer(req.body);
    return res.status(200).send(newUser);
  } catch (e) {
    logger.error(e);
    return next(e);
  }
}

module.exports = [validate, handler];
