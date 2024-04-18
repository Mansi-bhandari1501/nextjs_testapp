const express = require('express');
const {requireSignIn} = require('../middleware/authMiddleware.js')

const router = express.Router();

const { bookController } = require('../controller/index.js');


router.post("/",requireSignIn, bookController.addBook);
router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBook);
router.put("/:id", bookController.editBook);
router.delete("/:id", bookController.deleteBook);



module.exports = router