const User = require('../models/user');
const otpGenerator = require('otp-generator');
const sendMail = require('../utils/mailSender');

const validation = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }
        const existingUser = await User.findOne({ email });
        // if user already verified
        if (existingUser && existingUser.isVerified) {
            return res.status(400).json({
                message: "User already exists"
            });
        }
        const otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            digits: true,
            specialChars: false
        });
        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);
        // resend OTP if user exists but not verified
        if (existingUser && !existingUser.isVerified) {
            existingUser.otp = otp;
            existingUser.otpExpires = otpExpiry;
            await existingUser.save();
            await sendMail(email, otp);
            return res.json({
                message: "New OTP sent"
            });
        }
        // create new user
        const user = new User({
            name,
            email,
            password,
            otp,
            otpExpires: otpExpiry
        });
        
        await user.save();
        await sendMail(email, otp);
        res.status(201).json({
            message: "OTP sent to email"
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Server error"
        });
    }
};

module.exports = { validation };