const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');
const logger = require('@condor-labs/logger');
// midlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.use((error, req, res, next) => {
  logger.error(
    JSON.stringify({
      method: req.method,
      url: req.url,
      error: {
        message: error.message,
        stack: error.stack,
      },
      params: req.params,
      headers: req.headers,
      querys: req.query,
    })
  );
  try {
    return res.status(500).send({ errors: error.message });
  } catch (error) {
    return next(error);
  }
});

module.exports = app;
