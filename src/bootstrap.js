import sequelize from "../DB/connection.js"
import userRouter from './user.model/user.router.js'
import postRouter from "./post.model/post.router.js"
import commentRouter from "./comment.model/comment.router.js"



function bootstrap(app,express){
    sequelize.sync({alter:true})
    app.use(express.json())
    app.use('/users',userRouter)
    app.use('/posts',postRouter)
    app.use('/comments',commentRouter)
}
export default bootstrap