const router = require('express').Router();
const registerController = require('./../controller/auth/registerController')
const loginController = require('./../controller/auth/loginController')


router.post('/register', registerController);

router.post('/login', loginController);

module.exports = router;