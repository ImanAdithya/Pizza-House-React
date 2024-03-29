var express = require('express');
var router = express.Router();

const UserController=require('../controllers/UserController');

router.post('/saveUser', UserController.saveUser);
router.post('/findUser', UserController.findUser);
router.get('/getAllUser', UserController.getAllUsers);
router.delete('/deleteUser', UserController.deleteUser);

module.exports = router;
