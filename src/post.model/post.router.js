import { Router } from "express";
import * as postsController from "./post.controller/post.controller.js";

const router =Router()

router.post('/addPost', postsController.addPost)
router.get('/getPosts', postsController.getPosts)
router.get('/getPost/:id', postsController.getPost)
router.put('/updatePost/:id', postsController.updatePost)
router.delete('/deletePost/:id', postsController.deletePost)

export default router