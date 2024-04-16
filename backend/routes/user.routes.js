const express = require('express');


const router = express.Router();

const { userController } = require('../controller/index.js');


router.post("/register", userController.registerController);
router.post("/login", userController.loginController);



module.exports = router