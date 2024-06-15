import commentModel from "../../../DB/models/comment.model.js"
import postModel from "../../../DB/models/post.model.js"
import userModel from "../../../DB/models/user.model.js"

//get comments
export const getComments = async (req, res, next) => {
    const findcomments = await commentModel.findAll()
    if (findcomments) {
        return res.status(201).json({ message: 'done', findcomments })
    }
    return res.json({ message: 'no comment yet' })
}

//add comment
export const addComment = async (req, res, next) => {
    const { postId, userId } = req.body
    const findPost = await postModel.findOne({
        where: { id: postId }
    })
    const findUser = await userModel.findOne({
        where: { id: userId }
    })
    if (findUser) {
        if (findPost) {
            const addComment = await commentModel.create(req.body)
            return res.status(200).json({ message: 'added successfully', addComment })
        }
        return res.status(404).json({ message: 'post is not defind' })
    }
    return res.status(404).json({ message: 'user is not defind' })
}

//update comment
export const updateComment = async(req, res, next) =>{
    const { id } = req.params
    const { content } = req.body
    const updateComment = await commentModel.update({content:content},{
        where:{id}
    })
    if(updateComment){
        return res.json({message:'updateed successfully',updateComment})
    }
    return res.json({message:'comment is not defind'})
}

//delete comment
export const deleteComment = async(req,res,next) =>{
    const { id } = req.params
    const findComment = await commentModel.destroy({
        where:{id}
    })
    if(findComment){
        return res.json({message:'deleted successfully'})
    }
    return res.json({message:'comment is not defind'})
}