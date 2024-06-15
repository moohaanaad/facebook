import { where } from "sequelize"
import postModel from "../../../DB/models/post.model.js"
import userModel from "../../../DB/models/user.model.js"
import commentModel from "../../../DB/models/comment.model.js"


//add post
export const addPost = async (req, res, next) => {
    const findUser = await userModel.findByPk(req.body.userId)
    if (findUser && req.body.title && req.body.content) {
        req.body.softDelete = false
        const addPost = await postModel.create(req.body)
        return res.status(201).json({ message: 'added successfully', addPost })
    }
    return res.status(404).json({ message: 'user not found' })
}

//get all posts
export const getPosts = async (req, res, next) => {
    const findPost = await postModel.findAll({
        include: {
            model: userModel,
            attributes: { exclude: ['password'] },
        }
    })
    if (findPost) {
        return res.status(200).json({ message: 'done', findPost })
    }
    return res.status(404).json({ message: 'post is not defind' })
}

//get post
export const getPost = async (req, res, next) => {
    const { id } =req.params
    const findPost = await postModel.findByPk(id,{
        attributes:{exclude:['softDelete']},
        include: {
            all:true,
            attributes: { exclude: ['password'] }
        }
    })
    if (findPost) {
        return res.status(200).json({ message: 'done', findPost })
    }
    return res.status(404).json({ message: 'post is not defind' })
}

//update post by id 
export const updatePost = async (req, res, next) => {
    const {id} =req.params
    const findPost = await postModel.update(req.body,{
        where:{id}
    })
    if (findPost[0]){ 
        return res.status(200).json({message:'updated successfully',findPost})
    }
    return res.status(404).json({message:'post is not defind'})
}

//delete post 
export const deletePost = async (req, res, next) =>{
    const {id} =req.params
    const post =await postModel.destroy({
        where:{id}
    })
    if(post){
        return res.status(200).json({message:'deleted successfully',post})
    }
    return res.status(404).json({message:'post is not defind'})
}