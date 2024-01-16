var express = require('express');
var router = express.Router();

const UserController=require('../controllers/UserController');

router.post('/saveUser', UserController.saveUser);

module.exports = router;
