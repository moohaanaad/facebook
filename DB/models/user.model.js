import { DataTypes } from "sequelize";
import sequelize from "../connection.js";
import postModel from "./post.model.js";
import commentModel from "./comment.model.js";

//username, email, and password
const userModel = sequelize.define('user', {
    username: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    password: {
        type:DataTypes.STRING(100),
        allowNull:false
    }
})

userModel.hasMany(postModel,{
    onUpdate:'CASCADE',
    onDelete:'CASCADE'
})
postModel.belongsTo(userModel)

userModel.hasMany(commentModel,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})
commentModel.belongsTo(userModel)

export default userModel