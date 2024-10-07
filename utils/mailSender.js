import nodemailer from nodemailer;
const mailSender= async(email,title,body)=>{

    try {

        // 1 to send a mail first have to create treansporter 
        // 2 THEN USE SEND MAIL FUNCTION

        //step 1
        let transporter= nodemailer.createTransport({
            host:process.env.body.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        })

        // step 2
        let info = await transporter.sendMail({
            from:"StudyNotion team ",
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`    
        })
        //printing the info detail
        console.log(info);
        return info


        
    } catch (error) {
        console.log(error.message);
    }
}
module.exports=mailSender 