const logger = require('@condor-labs/logger');
const Users = require('../../models/Usuarios');
async function handler(req, res, next) {
  try {
    const result = await Users.findAll();
    return res.status(200).send(result);
  } catch (e) {
    logger.error(e);
    return next(e);
  }
}

module.exports = [handler];
