const express = require('express')
const customerController = require('../controller/customerController.js');

const router = express.Router()

router.post('/customer', customerController.insertCustomerCtrl)
router.get('/customer', customerController.getAllCustomerCtrl)
router.put('/customer', customerController.updateCustomerCtrl)
router.delete('/customer', customerController.deleteCustomerCtrl)

module.exports = router