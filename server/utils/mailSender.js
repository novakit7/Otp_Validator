const mailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();
// to mail genration 
const sendMail = async (email, otp)=>{
    const transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass : process.env.PASS
        }
    });
    // details in the mailbox of user
    const mailOptions = {
        from: process.env.EMAIL,
        to : email,
        subject : 'email verification otp',
        text : `your otp is ${otp}`
    };
    // send mail
    await transporter.sendMail(mailOptions);
};
module.exports = sendMail;