import { Sequelize } from "sequelize";

const sequelize =new Sequelize('facebook','root','',{
    host:'localhost',
    dialect:"mysql"
})
await sequelize.authenticate().then(()=>{
    console.log('DB connection successfully')
}).catch((error)=>{
    console.log("error",error)
})
export default sequelize