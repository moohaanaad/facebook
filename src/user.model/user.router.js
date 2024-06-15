import { Router } from "express";
import * as userController from "./user.controller/user.controller.js";

const router = Router()

router.post('/signUp', userController.signUp)
router.post('/logIn', userController.logIn)
router.get('/userDetails/:id', userController.userDetails)
router.post('/logOut', userController.logOut)
export default router