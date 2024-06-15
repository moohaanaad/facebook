import { DataTypes } from "sequelize";
import sequelize from "../connection.js";
import commentModel from "./comment.model.js";

//title, content
const postModel = sequelize.define('post',{
 title:{
    type:DataTypes.STRING(150),
    allowNull:false
 },
 content:{
    type:DataTypes.STRING(500),
    allowNull:false
 }
},{
    paranoid:true,
    deletedAt:"softDelete"
})

postModel.hasMany(commentModel,{
    onUpdate:'CASCADE',
    onDelete:'CASCADE'
})
commentModel.belongsTo(postModel)

export default postModel