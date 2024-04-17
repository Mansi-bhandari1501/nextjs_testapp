const express = require('express');
const userRoute = require('./user.routes.js');
const bookRoute = require('./books.routes.js');
const issueRoute = require('./issue.routes.js');

// import examRoute from "./exam.routes.js"
// import questionRoute from "./question.routes.js"
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Linkedin");
});

router.use("/users", userRoute);
router.use("/books", bookRoute);
router.use("/issue", issueRoute);


module.exports = router