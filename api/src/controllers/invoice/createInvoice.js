const logger = require('@condor-labs/logger');
const inputValidate = require('../../middlewares/inputValidation');
const { schema } = require('../schemas/invoice/invoice.schema');
const validate = inputValidate.validate(schema);
const repo = require('../../repositories/invoice/invoiceRepository');

async function handler(req, res, next) {
  try {
    const newInvoice = await repo.createInvoice(req.body);
    return res.status(200).send(newInvoice);
  } catch (e) {
    logger.error(e);
    return next(e);
  }
}

module.exports = [validate, handler];
