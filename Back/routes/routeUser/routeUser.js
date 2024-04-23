const express = require("express");
const { ctrlCreateUser, login } = require("../../Controllers/ControllerUser");
const { middlEmail } = require("../../utils/middlewares/middlewaresEmail");

const router = express.Router();

router.post("/register", middlEmail , ctrlCreateUser)
router.post("/login", middlEmail , login)

module.exports = router