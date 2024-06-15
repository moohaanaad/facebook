import { DataTypes } from "sequelize";
import sequelize from "../connection.js";

//content
const commentModel =sequelize.define('comment',{
    content:{
        type:DataTypes.STRING(500),
        allowNull:false
    }
})
export default commentModel