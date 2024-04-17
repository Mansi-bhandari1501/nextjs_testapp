const {User}= require("../models");
const {Books}= require("../models");

exports.addNewBook = async(req) => {
    try{
      console.log("Request",req.body)
      const user = await User.findOne({
        uuId: req.body.uuId
      })
      console.log('user: ', user);
      if(user.role === 'admin'){

      const  {title,category,stock,descriptions,author} = req.body
      
         const bookExists = await Books.findOne({where:{title:title}})
         console.log(bookExists,"jgsfusugufgsud")
         if(bookExists){
          throw Object.assign(new Error(), {
            name: "CONFLICT",
            message: "Book Already exists",
          });
         }
         else{
      
             const newBook = await Books.create({title,stock,category,descriptions,author})
             console.log("bookss",newBook)
             return newBook
         }
        }
    // return newBook;
    }
    catch(error){
      // console.log(error)
      throw(error)
    }
 }
exports.getAllBooks = async(req) => {
    try{
       const Book = await Books.findAll({})
       
       if(Book){
        return Book
       }
       else{
        throw Object.assign(new Error(), {
          name: "CONFLICT",
          message: "No Book is present",
        });
        
    }
  }
    catch(error){
      console.log('error: ', error);
      throw(error)
    }
  }
  
  exports.getBookById = async(req) => {
    try{
       const Book = await Books.findOne({where:{bookId:req.params.id}})
       if(Book){
        return Book
       }
       else{
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "No Book is present",
        });
       }
    }
    catch(error){
      console.log('error: ', error);
      throw(error)
    }
  }
  
  // edit exam by id
  exports.editBook = async(req) => {
    try{
       const user = await User.findOne({where:{userId: req.body.userid}})
       if(user.role === "admin"){
        const Book = await Books.findOne({bookId: req.params.id})
        if(Book){
          // Book.title = req.body.title;
          // Book.author = req.body.author;
          // Book.category = req.body.category;
          // Book.descriptions = req.body.descriptions;
          // Book.stock = req.body.stock;
          // Book.save()
          const updatedBook = Books.update(
            req.body ,
            { where: { bookId: req.params.id } }
          )
         return Book
        }
        else{
          throw Object.assign(new Error(), {
            name: "BAD_REQUEST",
            message: "No Book is present",
          });
        }
       }
       else{
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "Cannot update exam details",
        });
       }
    }
    catch(error){
     throw(error)
    }
  }
  
  exports.deleteBook = async(req) => {
    try{
      console.log("params",req.params.id)
       const user = await User.findOne({where:{userId: req.body.userId}})
       if(user.role === "admin"){
        console.log("user is admin")
        const Book = await Books.findOne({where:{bookId: req.params.id}})
        console.log(Book)
        if(Book){
         await Book.destroy()
         return Book
        }
        else{
          throw Object.assign(new Error(), {
            name: "BAD_REQUEST",
            message: "Book doesnot exist",
          });
        }
       }
       else{
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "Cannot delete Book ",
        });
       }
    }
    catch(error){
      console.log('error: ', error);
     throw(error)
    }
  }
  
  
  
// export const examService = {
//     addExam,
//     getAllExams,
//     getExamById,
//     deleteExam,
//     editExam,
// };

  