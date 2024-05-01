const express = require("express");
const mailers = require("../../Controllers/controllersmailers");

const router = express.Router();

router.post('/mailer',mailers)


module.exports= router