const mailer = require('nodemailer');

let transport = mailer.createTransport({
    service:'gmail',
    auth:{
        user:'userEmail@gmail.com',
        pass:'App_password'
    }
})




let messageObj = {
    From:'user@gmail.com',
    to:'recieveremail@gmail.com',
    subject:'Dil ❤❤ ka Matter hai',
    text:` 
       write your message 
    `
}

transport.sendMail(messageObj,(err, info)=>{
   if(err){
    console.log(err);
   }else{
    console.log("Email Sent");
    console.log(info.response);
   }
})
