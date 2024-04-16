
import express from "express";
import { userController } from "../controller/index.js";
const router = express.Router();

router.post("/register", userController.registerController);
router.post("/login", userController.loginController);



export default router;