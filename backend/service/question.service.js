import { examModel } from "../model/exam.model.js"
import { questionModel } from "../model/question.model.js"
import { userModel } from "../model/user.model.js"

const addQuestion = async(req) => {
    try{
      const exam = req.params._id
      console.log("exxxxxam",exam)
      
      console.log("bodyyyyyyyyyyyy",req.body)
      const {title,description,answer,option1,option2,option3,option4,weightage} = req.body
      const options = {

        option1,option2,option3,option4
      }
      const user = await userModel.findById(req.user._id)
      console.log("user",user)
      if(user.role === "admin"){
        console.log("ssssssssssss")
         // add question to Questions Collection
         const question = await questionModel.create({title,description,answer,options,weightage,exam})
         console.log("ss",question)
         // add question to exam
         console.log(exam)
         const examdata = await examModel.findOne({_id:exam})
         console.log(examdata)

         examdata.questions.push(question._id)
         await examdata.save();
         return question
       }
       else{
        throw Object.assign(new Error(), {
          name: "UNAUTHORIZED",
            message: "Question Cannot added in exam",
          });
        
       }
    }
    catch(error){
        throw(error)
    }
 }
 
 const editQuestion = async(req) => {
   try{ 
     const user = await userModel.findById(req.body.userid)
     if(user.isAdmin){
        const question = await questionModel.findByIdAndUpdate(req.body.questionId, req.body);
        return question
     }
     else{
      throw Object.assign(new Error(), {
        name: "UNAUTHORIZED",
          message: "Question cannot edit in exam",
        });
     }
   }
   catch(error){
    throw(error)
   }
 }
 
 const deleteQuestion = async(req) => {
   try{ 
     const user = await userModel.findById(req.body.userid)
     if(user.isAdmin){
       // delete question from the questions collection 
       const question = await questionModel.findOne({ _id: req.body.questionId});
       await question.delete()
       // delete question in exam
       const exam = await examModel.findOne({_id: req.params.id})
       const questions = exam.questions
       exam.questions = questions.filter((question)=>{
         if(question._id!=req.body.questionId){
           return question._id!=req.body.questionId
         }
       })
       await exam.save()
       return;
     }
     else{
      throw Object.assign(new Error(), {
        name: "UNAUTHORIZED",
          message: "Question cannot deleted in exam",
        });
     }
     }
   catch(error){
    throw(error)
   }
 }
 const getQuestions = async(req) => {
  try{ 
    const exam = req.params.id
  
    console.log("get question api call",exam)
    const user = await userModel.findById(req.user._id)
    console.log(user)
    if(user.role === "admin" || "user"){
      const question = await questionModel.find({exam})
      console.log("question.....",question)
      return question
    }
    else{
     throw Object.assign(new Error(), {
       name: "UNAUTHORIZED",
         message: "Question cannot fetch in exam",
       });
    }
    }
  catch(error){
   throw(error)
  }
}

 export const questionService = {
  addQuestion,
  deleteQuestion,
  editQuestion,
  getQuestions
 }