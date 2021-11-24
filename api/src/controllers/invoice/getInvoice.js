const logger = require('@condor-labs/logger');
const Facturas = require('../../models/Facturas');

async function handler(req, res, next) {
  try {
    const result = await Facturas.findAll();
    return res.status(200).send(result);
  } catch (e) {
    logger.error(e);
    return next(e);
  }
}

module.exports = [handler];
