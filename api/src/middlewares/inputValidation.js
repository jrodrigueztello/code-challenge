const joi = require('joi');
const requestObjects = ['body', 'cookies', 'headers', 'params', 'query'];
const logger = require('@condor-labs/logger');
const validate = (schema = {}) => {
  return (req, res, next) => {
    let keys = Object.keys(schema);

    if (keys.length > 0) {
      keys = keys.filter((k) => requestObjects.indexOf(k) > -1);
    } else {
      return next();
    }

    if (keys.length === 0) {
      return next();
    }

    let result;
    for (let i = 0; i < keys.length; i++) {
      const element = keys[i];
      const allowUnknownReq = element === 'headers' ? true : false;

      result = joi.validate(req[element], schema[element], {
        allowUnknown: allowUnknownReq,
      });
      if (result.error !== null) {
        break;
      }
    }
    if (result.error === null) {
      next();
    } else {
      const errorDetail = result.error.details;
      logger.error(JSON.stringify({ errorDetail, body: req.body, query: req.query }));
      res.status(400).json({ errors: errorDetail });
    }
  };
};

const validateSchema = ({ schema, object }, opts = {}) => {
  return joi.validate(object, schema, opts);
};

module.exports = { validate, validateSchema };
