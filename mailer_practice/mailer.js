import dotenv from "dotenv"
dotenv.config()
// 1st we are going to import the nodemailer files 
import mailer from "nodemailer"; 
// 2nd we are going to import the dotenv files
//import dotenv from "dotenv"; 
//3rd we are going to config the dotenv file 
// dotenv.config() 
//4th then we are going to create the async function to send mail 
async function email(){
    //5h then we are going to make a try catch block 
    try {
   // 6th we are going to create an variabel user email 
   // which will acess the email which is kept in env by use of process
   let email= process.env.EMAIL; 
   //7th we are going to use the password in same manner as email 
   let pass = process.env.PASS;
   // 8th now we are going to create to sotre the details of the user 
   let userdetails = mailer.createTransport({
    service:"gmail", 
    auth: {
        // 9th put user email and passoword to be acessed by the nodemailer
        user:process.env.EMAIL, 
        password:process.env.PASS
    }
   })
// 10th then we are going to make the await function in which we are 
// user sendMail method to send the mail to individula we want 
const sender = await userdetails.sendMail({
    from:email, //sender mail id
    to: ["suhailroushan13@gmail.com"], // reciver mail id 
    subject: "unexpected leave on friday", // subject of the email
    text:"hello sir, this  is to inform that i have not attended the the friday class becuase of the sudden college project work that came up on fiday, due to which i did not able to do the task on time, hence not able to come to class"
})
console.log("email was send to sir",sender.messageid)
    }
        
  catch (error) {
        console.log(error.message,error.name)
    }
}

email()
console.log("EMAIL:", process.env.EMAIL);
console.log("PASS:", process.env.PASS ? "loaded" : "missing");
