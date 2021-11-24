const logger = require('@condor-labs/logger');
const Facturas = require('../../models/Facturas');

async function handler(req, res, next) {
  try {
    if (req.params && req.params.id) {
      const { id } = req.params;
      const response = await Facturas.findByPk(id);
      return res.status(200).send( response );
    }
    return res.status(400).send('Id es requerido');
  } catch (e) {
    logger.error(e);
    return next(e);
  }
}

module.exports = [handler];