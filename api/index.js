require('dotenv').config();
const app = require('./src/app');
const logger = require('@condor-labs/logger');

const { PORT = 3001, SERVER_TIMEOUT = 15000 } = process.env;

const server = app.listen(PORT, async () => {
  logger.log(`API started at port: ${PORT}`);
});

server.setTimeout(+SERVER_TIMEOUT);
