const express = require('express');
const userRoute = require('./user.routes.js');

// import examRoute from "./exam.routes.js"
// import questionRoute from "./question.routes.js"
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Linkedin");
});

router.use("/users", userRoute);
// router.use("/exam", examRoute);
// router.use("/question",questionRoute)

module.exports = router