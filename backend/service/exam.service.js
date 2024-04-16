import { examModel } from "../model/exam.model.js"
import { userModel } from "../model/user.model.js"

const addExam = async(req) => {
    try{
      console.log("id",req.user._id)

      const  {name,duration,category,totalMarks,passingMarks} = req.body
       const user = await userModel.findOne({
         _id: req.user._id
       })
       console.log(user)
       if(user.role === 'admin'){
         const examExists = await examModel.findOne({name:name})
         if(examExists){
          throw Object.assign(new Error(), {
            name: "CONFLICT",
            message: "Exam Already exists",
          });
         }
         else{
             req.body.questions = []
             const newExam = await examModel.create({name,duration,category,totalMarks,passingMarks})
             console.log("exammmmm",newExam)
             return newExam
         }
       }
    }
    catch(error){
      throw(error)
    }
 }
 const getAllExams = async(req) => {
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
  
  const getExamById = async(req,res) => {
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
  const editExam = async(req,res) => {
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
  
  const deleteExam = async(req) => {
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
  
  
  
export const examService = {
    addExam,
    getAllExams,
    getExamById,
    deleteExam,
    editExam,
};

  