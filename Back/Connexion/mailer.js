const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'localhost',
    port: 587,
    auth: {
        user: 'project.2',
        pass: 'secret.2'
    }
});
module.exports= transporter