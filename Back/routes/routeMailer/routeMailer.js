const express = require("express");
const { mailers, mailerpassword } = require("../../Controllers/controllersmailers");


const router = express.Router();

router.post('/mailer',mailers)
router.get('/mailerpassword',mailerpassword)


module.exports= router