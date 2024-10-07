import mongoose from "mongoose"
require("dotenv").config();//take dotenv to config folder

exports.connect=()=>{

    mongoose.connect(process.env.MONGODB_URL ,{
        useNewUrlPareser:true,
        useUnifiedTopology:true
    })
    .then( ()=>console.log("db connected successfully "))
    .catch((error)=>{
        console.log("connection failed ");
        console.error(error);
        process.exit(1);
    })
}