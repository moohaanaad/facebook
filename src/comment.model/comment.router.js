import { Router } from "express";
import * as commentController from "./comment.controller/comment.controller.js";

const router = Router()

router.get('/', commentController.getComments)
router.post('/addComment', commentController.addComment)
router.put('/updateComment/:id', commentController.updateComment)
router.delete('/deleteComment/:id', commentController.deleteComment)
export default router