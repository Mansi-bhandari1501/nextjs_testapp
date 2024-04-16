import { errorHandler } from "../lib/utils.js";
import { examService } from "../service/exam.service.js";
const addExam = async (req,res) => {
    try{
        const response = await examService.addExam(req);
        console.log("response",response)
        return res.status(201).send({
            success:true,
            message: 'Exam added succefully',
            Exam: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}
const getAllExams = async (req,res) => {
    try{
        const response = await examService.getAllExams(req);
        console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'Exam Fetched succefully',
            Exam: response
        })
    }
    catch(error)
    {

        console.log(error)
        errorHandler(res,error);
    }
}
const deleteExam = async (req,res) => {
    try{
        const response = await examService.deleteExam(req);
        console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'Exam deleted succefully',
            Exam: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}
const getExam = async (req,res) => {
    try{
        const response = await examService.getExamById(req);
        console.log("response",response)
        return res.status(200).send({
            success:true,
            message: 'Exam fetched succefully',
            Exam: response
        })
    }
    catch(error)
    {
        errorHandler(res,error);
    }
}
const editExam = async (req,res) => {
  try{
      const response = await examService.editExam(req);
      console.log("response",response)
      return res.status(200).send({
          success:true,
          message: 'Exam updated succefully',
          Exam: response
      })
  }
  catch(error)
  {
      errorHandler(res,error);
  }
}

const examController = {
    addExam,
    getExam,
    deleteExam,
    getAllExams,
    editExam,
}

export default examController;
