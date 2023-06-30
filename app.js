const nodemailer=require('nodemailer');

const transporter=nodemailer.createTransport({
    // service provide
    service:"gmail", 
    auth:{
        // enter email id and password
        user:"******@gmail.com",
        pass:"****"
    }
});

const options={
    // your email address
    from:"*****@gmail.com",
    // receiver's email address
    to:"******@gmail.com",
    subject:"Mail a friend using nodemailer",
    text:"This mail is sent using Nodemailer"
};

transporter.sendMail(options,function(err,info){
    if(err){
        console.log(err);
        return;
    }
    console.log("Email sent");
    console.log("Sender: "+options.from);
    console.log("Receiver: "+options.to);
})