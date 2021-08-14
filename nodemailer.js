require("dotenv").config()
const nodemailer = require('nodemailer')
var transport = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    }
});
module.exports = transport