const express = require('express');
const {requireSignIn} = require('../middleware/authMiddleware.js')

const router = express.Router();

const { bookController } = require('../controller/index.js');


router.post("/",requireSignIn, bookController.addBook);
router.get("/",requireSignIn, bookController.getBooks);
router.get("/:id",requireSignIn, bookController.getBook);
router.put("/:id",requireSignIn, bookController.editBook);
router.delete("/:id",requireSignIn, bookController.deleteBook);



module.exports = router