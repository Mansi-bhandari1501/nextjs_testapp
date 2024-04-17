// import { errorHandler } from "../lib/utils.js";
// import { bookService } from "../service/book.service.js";
// const {bookService} =require('../service/')
const {errorHandler} = require('../lib/utils.js');
const {issueService} = require('../service/index.js');

exports.IssueBook = async (req,res) => {
    // console.log(req,"REQUEST DATA")
    try{
        const response = await issueService.addNewIssue(req);
        console.log("response",response)
        return res.status(201).send({
            success:true,
            message: 'IssueBook added successfully',
            Issue: response
        })
    }
    catch(error)
    {
        console.log('error: ', error);
        errorHandler(res,error);
    }
}
exports.getIssues = async (req,res) => {
    try{
        const response = await issueService.getAllIssue(req);
        console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'Issue Fetched successfully',
            Issue: response
        })
    }
    catch(error)
    {
        console.log('error: ', error);
        errorHandler(res,error);
    }
}
exports.deleteBook = async (req,res) => {
    try{
        const response = await issueService.deleteIssue(req);
        console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'Issue deleted succefully',
            Issue: response
        })
    }
    catch(error)
    {
        console.log('error: ', error);

        errorHandler(res,error);
    }
}
exports.getSingleIssue = async (req,res) => {
    try{
        const response = await issueService.getIssueById(req);
        console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'Issue fetched succefully',
            Issue: response
        })
    }
    catch(error)
    {
        console.log('error: ', error);

        errorHandler(res,error);
    }
}
exports.editIssue = async (req,res) => {
  try{
      const response = await issueService.editIssue(req);
      console.log("response",response)
      return res.status(200).send({
          success:true,
          message: 'Issue updated successfully',
          Issue: response
      })
  }
  catch(error)
  {
      console.log('error: ', error);
      errorHandler(res,error);
  }
}
exports.acceptIssue = async (req,res) => {
  try{
      const response = await issueService.acceptIssue(req);
      console.log("response",response)
      return res.status(200).send({
          success:true,
          message: 'Issue updated successfully',
          Issue: response
      })
  }
  catch(error)
  {
      console.log('error: ', error);
      errorHandler(res,error);
  }
}


