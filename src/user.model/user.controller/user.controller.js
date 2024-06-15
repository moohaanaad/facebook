import commentModel from "../../../DB/models/comment.model.js"
import postModel from "../../../DB/models/post.model.js"
import userModel from "../../../DB/models/user.model.js"
import bcryptjs from "bcryptjs"


//signUp
export const signUp = async (req, res, next) => {
    const { email, password } = req.body
    const userExist = await userModel.findOne({
        where: { email }
    })
    console.log(userExist)
    if (userExist) {
        return res.json({ message: 'email was already exist' })
    }
    req.body.password = bcryptjs.hashSync(password, 8)
    const newUser = await userModel.create(req.body)
    return res.json({ message: 'signUp successfully', newUser })
}

//logIn
export const logIn = async (req, res, next) => {
    const { email, password } = req.body
    const findUser = await userModel.findOne({
        where: { email }
    })
    if (findUser) {
        const match = bcryptjs.compareSync(password, findUser.password)
        if (match) {
            return res.json({ message: 'logIn successfully', userId: findUser.id })
        }
        return res.json({ message: 'invaled email or password' })
    }
    return res.json({ message: 'invaled email or password' })
}

//get user details
export const userDetails = async (req, res, next) =>{
    const {id} = req.params
    const findUser = await userModel.findByPk(id,{
        attributes:{exclude:['password']},
        include:{
            all:true
        }
    })
    if(findUser){
        return res.json({message:'user details',userDetails:findUser})
    }
    return res.json({message:'user is not defind'})
}

//logOut 
export const logOut = async (req, res, next) => {
    const { email } = req.body
    const user = await userModel.findOne({
        where: { email }
    })
    if (user) {
        return res.json({ message: 'logOut successfully', user })
    }
    return res.json({ message: 'user is not defind' })
}