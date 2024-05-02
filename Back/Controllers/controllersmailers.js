
const jwt= require('jsonwebtoken');
const { extractToken } = require("../utils/token");
const { transporter } = require("../Connexion/mailer");
const { pool } = require('../Connexion/db');


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
const { sujet, corps} = req.body
  const info = await transporter.sendMail({
    from: `${authData.email}`, 
    to: 'nayuko1208@gmail.com', 
    subject: `${sujet}`, 
    text: `voila le test`,
    html: `<b>Message du user ${authData.firstName}</b>
    <p>${corps}</p>`, 
  })

  console.log('Message sent: %s', info.messageId)
  res.status(200).json(`Message send with the id ${info.messageId}`)
}
})
}

const mailerpassword = async (req, res) => {
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

                
   
  const info = await transporter.sendMail({
    from: `${process.env.SMTP_EMAIL}`, 
    to: `nayuko1208@gmail.com`, //${authData.email}
    subject: `Voici votre lien pour changer votre mot de passe`, 
    text: `voila le test`,
    html: `<b>Bonjour ${authData.firstName}</b>
    <p> Voici le lien pour changer votre mot de passe </p>
    <a href="http://localhost:5500/Front/Home/updatemdp/connexion/connexionupdate.html">  Cliquez ici pour changer de mot de passe </a>`, 
  })

  console.log('Message sent: %s', info.messageId)
  res.status(200).json(`Message send with the id ${info.messageId}`)
}}
)
}


 module.exports = {mailers , mailerpassword}