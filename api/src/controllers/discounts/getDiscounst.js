const logger = require('@condor-labs/logger');
const Descuentos = require('../../models/Descuentos');

async function handler(req, res, next) {
  try {
    const result = await Descuentos.findAll();
    return res.status(200).send(result);
  } catch (e) {
    logger.error(e);
    return next(e);
  }
}

module.exports = [handler];
