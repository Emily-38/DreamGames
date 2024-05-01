const nodemailer = require("nodemailer");

const jwt= require('jsonwebtoken');
const { extractToken } = require("../utils/token");
const  transporter  = require("../utils/nodemailer");
require('dotenv').config()





const mailers = async (req, res) => {
    const token= await extractToken(req)
    jwt.verify( 
        token,
      process.env.SECRET_KEY,
      async (err, authData) => {
          if (err) {
    
            console.log(err)
            res.status(401).json({ err: 'Unauthorized' })
            return
        } else {
    const { sujet, corps } = req.body;



    // Définition des options de l'e-mail
    let mailOptions = {
        from: 'contact@contact.contact',
        to: authData.email,
        subject: sujet,
        text: corps
    };

    // Envoyer l'e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
        } else {
            console.log('E-mail envoyé : ' + info.response);
            res.status(200).send('E-mail envoyé avec succès');
        }
    });
}
})
};

module.exports = mailers