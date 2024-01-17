var express = require('express');
var router = express.Router();

const ProductController=require('../controllers/ProductController');

router.post('/saveProduct', ProductController.saveProduct);
router.get('/getAllProduct', ProductController.getAllProducts);
router.put('/updateProduct', ProductController.updateProduct);
router.delete('/deleteProduct', ProductController.deleteProduct);


module.exports = router;
