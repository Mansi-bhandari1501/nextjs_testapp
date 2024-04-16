const {User}= require("../models");
const {Books}= require("../models");

exports.addNewBook = async(req) => {
    try{
      // console.log("Request",req.body)
      const user = await User.findOne({
        _id: req.body.userId
      })
      console.log('user😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁😁: ', user);
      if(user.role === 'admin'){

      const  {title,category,stock,description} = req.body
      
         const bookExists = await Books.findOne({where:{title:title}})
         console.log(bookExists,"jgsfusugufgsud")
         if(bookExists){
          throw Object.assign(new Error(), {
            name: "CONFLICT",
            message: "Book Already exists",
          });
         }
         else{
      
             const newBook = await Books.create({title,stock,category,description})
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
exports.getAllExams = async(req) => {
    try{
       const exam = await examModel.find()
       if(exam){
        return exam
       }
       else{
        throw Object.assign(new Error(), {
          name: "CONFLICT",
          message: "No exam is present",
        });
        
    }
  }
    catch(error){
      throw(error)
 
    }
  }
  
  exports.getExamById = async(req,res) => {
    try{
       const exam = await examModel.findById(req.params.id).populate('questions');
       if(exam){
        return exam
       }
       else{
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "No exam is present",
        });
       }
    }
    catch(error){
      throw(error)
    }
  }
  
  // edit exam by id
  exports.editExam = async(req,res) => {
    try{
       const user = await userModel.findOne({_id: req.user._id})
       if(user.role === "admin"){
        const exam = await examModel.findOne({_id: req.params.id})
        if(exam){
          exam.name = req.body.name;
          exam.duration = req.body.duration;
          exam.category = req.body.category;
          exam.totalMarks = req.body.totalMarks;
          exam.passingMarks = req.body.passingMarks;
          exam.instructions
          exam.save()
         return exam
        }
        else{
          throw Object.assign(new Error(), {
            name: "BAD_REQUEST",
            message: "No exam is present",
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
  
  exports.deleteExam = async(req) => {
    try{
      console.log("params",req.params.id)
       const user = await userModel.findOne({_id: req.user._id})
       if(user.role === "admin"){
        console.log("uesr is admin")
        const exam = await examModel.findOneAndDelete({_id: req.params.id})
        console.log(exam)
        if(exam){
          exam.delete()
         return exam
        }
        else{
          throw Object.assign(new Error(), {
            name: "BAD_REQUEST",
            message: "exam doesnot exist",
          });
        }
       }
       else{
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "Cannot delete exam ",
        });
       }
    }
    catch(error){
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

  