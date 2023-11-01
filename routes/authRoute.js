import express from "express";
import {
  registerController,
  loginController,
  forgotPasswordController,
 // testController,
} from "../controllers/authController.js";

//import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);


//FORGOT PASSWORD || POST
router.post("/forgot-password", forgotPasswordController);


//test routes
//router.get("/test", requireSignIn, isAdmin, testController);
//requireSignIn,
router.get('/user-auth',(req,res)=>{
  res.status(200).send({ok:true});
})
export default router;