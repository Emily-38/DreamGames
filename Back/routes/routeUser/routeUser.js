const express = require("express");
const { ctrlCreateUser, login, profile, AllUser } = require("../../Controllers/ControllerUser");
const { middlEmail } = require("../../utils/middlewares/middlewaresEmail");

const router = express.Router();

router.post("/register", middlEmail , ctrlCreateUser)
router.post("/login", middlEmail , login)
router.get("/profile", profile)
router.get("/allUser",AllUser)

module.exports = router