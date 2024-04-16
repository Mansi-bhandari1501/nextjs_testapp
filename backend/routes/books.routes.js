const express = require('express');


const router = express.Router();

const { bookController } = require('../controller/index.js');


router.post("/", bookController.addBook);
// router.get("/", bookController.loginController);



module.exports = router