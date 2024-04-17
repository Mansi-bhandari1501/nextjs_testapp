const express = require('express');


const router = express.Router();

const { issueController } = require('../controller/index.js');


router.post("/", issueController.IssueBook);
router.get("/", issueController.getIssues);
router.get("/:id", issueController.getSingleIssue);
router.put("/:id", issueController.editIssue);
router.put("/accept/:id", issueController.acceptIssue);
router.delete("/:id", issueController.deleteBook);



module.exports = router