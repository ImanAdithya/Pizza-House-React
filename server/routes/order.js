var express = require('express');
var router = express.Router();

const OrderController=require('../controllers/OrderController');


router.post('/saveOrder', OrderController.saveOrder);


module.exports = router;