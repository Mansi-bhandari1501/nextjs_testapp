// import { errorHandler } from "../lib/utils.js";
// import { bookService } from "../service/book.service.js";
// const {bookService} =require('../service/')
const {errorHandler} = require('../lib/utils.js');
const {booksService} = require('../service/index.js');

exports.addBook = async (req,res) => {
    // console.log(req,"REQUEST DATA")
    try{
        const response = await booksService.addNewBook(req);
        console.log("response",response)
        return res.status(201).send({
            success:true,
            message: 'Book added successfully',
            Books: response
        })
    }
    catch(error)
    {
        console.log('error: ', error);
        errorHandler(res,error);
    }
}
exports.getBooks = async (req,res) => {
    try{
        const response = await booksService.getAllBooks(req);
        console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'Book Fetched successfully',
            Books: response
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
        const response = await booksService.deleteBook(req);
        console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'Book deleted succefully',
            Books: response
        })
    }
    catch(error)
    {
        console.log('error: ', error);

        errorHandler(res,error);
    }
}
exports.getBook = async (req,res) => {
    try{
        const response = await booksService.getBookById(req);
        console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'Book fetched succefully',
            Books: response
        })
    }
    catch(error)
    {
        console.log('error: ', error);

        errorHandler(res,error);
    }
}
exports.editBook = async (req,res) => {
  try{
      const response = await booksService.editBook(req);
    //   console.log("response",response)
      return res.status(200).send({
          success:true,
          message: 'Book updated succefully',
          Books: response
      })
  }
  catch(error)
  {
      console.log('error: ', error);
      errorHandler(res,error);
  }
}


