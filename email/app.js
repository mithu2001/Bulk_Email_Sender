const mailer = require('nodemailer');

let transport = mailer.createTransport({
    service:'gmail',
    auth:{
        user:'ifallinlove14369@gmail.com',
        pass:'App_password'
    }
})




let messageObj = {
    From:'ifallinlove14369@gmail.com',
    to:'kumarmithu2021@gmail.com',
    subject:'Dil ❤❤ ka Matter hai',
    text:` 
    इस इश्क़ ने हमे मगरूर कर दिया ,
    हर खुशी ☺️ से बहुत दूर कर दिया …
    सोचा नहीं था कभी हमे इश्क़ ♥️ होगा ,
    पर आपके नजरों ने मजबूर कर दिया … ।।
    I promise to love you a little bit more every day. 
    I want you in my life now and forever. 
    I want to hold onto your hands and keep you safe in my arms forever. 
    I love you.
         - Unknown Lover
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