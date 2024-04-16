import { errorHandler } from "../lib/utils.js";
import { questionService } from "../service/question.service.js";
const addQuestion = async (req,res) => {
    try{
        const response = await questionService.addQuestion(req);
        console.log("response",response)
        return res.status(201).send({
            success:true,
            message: 'question added succefully',
            question: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}

const deleteQuestion = async (req,res) => {
    try{
        const response = await questionService.deleteQuestion(req);
        console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'question deleted succefully',
            question: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}

const editQuestion = async (req,res) => {
  try{
      const response = await questionService.editQuestion(req);
      console.log("response",response)
      return res.status(200).send({
          success:true,
          message: 'question updated succefully',
          question: response
      })
  }
  catch(error)
  {
      errorHandler(res,error);
  }
}
const getQuestion = async (req,res) => {
    try{
        const response = await questionService.getQuestions(req);
        console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'question fetched succefully',
            question: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
  }

const questionController = {
    addQuestion,
    deleteQuestion,
    editQuestion,
    getQuestion
}

export default questionController;
