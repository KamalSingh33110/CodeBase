import mongoose from "mongoose";

const OTPSchema= new mongoose.Schema({

    email:{
        type:String,
        required:true
    }
    ,
    otp:{
        type:String,
        required:true
    }
    ,
    createdAt:{
        tyoe:Date,
        default:Date.now(),
        expires:5*60
    }
});

 
async function sendVerficationEmail(email,otp) {
    try {
        const mailResponse =await mailSender(email,"verification E-mail form StudyNotion ",otp);
        console.log("OTP send to mail successfully ",mailResponse);
        
    } catch (error) {
        
        console.log("error occur while sending OTP through mail ", error)
        throw error;
    }
}

//using "pre save hook"  middle ware because we have to send OTP in mail first   before creating the entry in DB
OTPSchema.pre("save",async function(next){
    //this. sending current otp and email 
     await sendVerficationEmail(this.email,this.otp);
    next();
})



module.exports= mongoose.model("OTP",OTPSchema) 