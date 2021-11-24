const logger = require('@condor-labs/logger');
const repo = require('../../repositories/discounts/discountsRepository');

async function handler(req, res, next) {
  try {
    if (req.params && req.params.type) {
      const { type } = req.params;
      const response = await repo.getPercentajeByType(type);
      return res.status(200).send({ response });
    }
    return res.status(400).send('Type es requerido');
  } catch (e) {
    logger.error(e);
    return next(e);
  }
}

module.exports = [handler];
