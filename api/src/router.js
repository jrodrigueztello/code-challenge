const express = require('express');
const router = express.Router();

const indexRouter = express.Router();

//general
indexRouter.get('/', function (req, res) {
  res.status(200).json({ response: 'API is working...' });
});

//customers
const customersRouter = express.Router();
const customerController = require('./controllers/customers');
customersRouter.post('/', customerController.createUser);
customersRouter.get('/', customerController.getUsers);
customersRouter.get('/:entity', customerController.getByIdOrName);

//discounts
const discountsRouter = express.Router();
const discountsController = require('./controllers/discounts');
discountsRouter.post('/', discountsController.createDiscount);
discountsRouter.get('/', discountsController.getDiscounst);
discountsRouter.get('/:type', discountsController.getPercentageByType);

//invoice
const invoiceRouter = express.Router();
const invoiceController = require('./controllers/invoice');
invoiceRouter.post('/', invoiceController.createDiscount);

router.use('/', indexRouter);
router.use('/users', customersRouter);
router.use('/discounts', discountsRouter);
router.use('/invoice', invoiceRouter);
module.exports = router;
