import express from "express";
import { requireSignIn } from "../middleware/authMiddleware.js";
import { questionController } from "../controller/index.js";


const router = express.Router();

router.post('/addQuestion/:_id',requireSignIn,questionController.addQuestion)
router.put('/editExam/:id',requireSignIn,questionController.editQuestion)
router.delete('/deleteExam/:id',requireSignIn,questionController.deleteQuestion)
router.get('/getQuestion/:id',requireSignIn,questionController.getQuestion)
export default router